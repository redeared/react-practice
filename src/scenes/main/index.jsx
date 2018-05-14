import React, { Component, Fragment } from 'react';
import Immutable from 'immutable';
import { searchByGenres, searchByTitle, searchByGenre } from './films-search-service';
import { FilmInfo } from './film-Info';
import { Films } from './films';
import { SearchBar } from './search-bar';
import { SearchResult } from './search-result';

const statusBarStyle = {
    background: 'ghostwhite',
    padding: '0 4em 0 4em',
};

export class Main extends Component {
    state = {
        searchByTitle: true,
        searchByGenre: false,
        view: 'search',
        selectedFilm: null,
        currentSearchResult: null,
    };

    getFilmsBySelectedFilmGenre() {
        const filmGenre = this.state.selectedFilm.genre;
        if (filmGenre) {
            return searchByGenres(filmGenre);
        }
        return [];
    }

    getCurrentSearchResult = () => (
        !this.state.currentSearchResult
            ? []
            : this.state.currentSearchResult
    );

    selectFilm = (film) => {
        this.setState({
            selectedFilm: film,
            view: 'film',
        });
    }

    backToSearch = () => {
        this.setState({
            selectedFilm: null,
            view: 'search',
        });
    }

    updateSearchFilter = (filters) => {
        this.setState({
            searchByTitle: filters.title,
            searchByGenre: filters.genre,
        });
    }

    search = (text) => {
        if (text) {
            const searchTitleResult = this.state.searchByTitle
                ? searchByTitle(text)
                : [];
            const searchByGenreResult = this.state.searchByGenre
                ? searchByGenre(text)
                : [];

            const searchResult = Immutable.Set([]).union(searchTitleResult, searchByGenreResult);

            this.setState({
                currentSearchResult: searchResult.toArray(),
            });
        } else {
            this.setState({
                currentSearchResult: null,
            });
        }
    }
    render() {
        if (this.state.view === 'film') {
            return (
                <Fragment>
                    <FilmInfo
                        film={this.state.selectedFilm}
                        onBackToSearch={this.backToSearch}
                    />
                    <div style={statusBarStyle}>
                        Films by {this.state.selectedFilm.genre} genre
                    </div>
                    <Films
                        items={this.getFilmsBySelectedFilmGenre()}
                        onItemClick={this.selectFilm}
                    />
                </Fragment>
            );
        }

        return (
            <Fragment>
                <SearchBar
                    onSearch={this.search}
                    filters={{
                        title: this.state.searchByTitle,
                        genre: this.state.searchByGenre,
                    }}
                    updateSearchFilter={this.updateSearchFilter}
                />
                <SearchResult
                    items={this.getCurrentSearchResult()}
                    onItemClick={this.selectFilm}
                />
            </Fragment>
        );
    }
}
