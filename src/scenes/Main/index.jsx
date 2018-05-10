import React, { Component, Fragment } from 'react';
import Immutable from 'immutable';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import FilmInfo from './components/FilmInfo';
import Films from './components/Films';
import { searchByGenres, searchByTitle, searchByGenre } from './components/films-search-service';

const statusBarStyle = {
    background: 'ghostwhite',
    padding: '0 4em 0 4em',
};

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchByTitle: true,
            searchByGenre: false,
            view: 'search',
            selectedFilm: null,
            currentSearchResult: null,
        };
    }

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

export default Main;
