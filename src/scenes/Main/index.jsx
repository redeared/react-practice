import React, { Component } from 'react';
import ErrorBoundary from './../../components/ErrorBoundary';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import FilmInfo from './components/FilmInfo';
import Films from './components/Films';

const initialState = {
    searchBy: 'title',
    sortBy: 'date',
    view: 'search',
    selectedFilm: null,
    currenSearchResult: null,
};

const genre = ['action', 'comedy', 'thriller'];

const filmsStub = (new Array(14)).fill({}, 0).map((elem, index) => (
    {
        id: index,
        title: `stub${index}`,
        date: 1998 + index,
        genre: genre[Math.floor((Math.random() * genre.length))],
        duration: '165',
        description: 'winter coming, winter coming, winter coming, winter coming, winter coming...',
    }));

const sameGenreStub = (new Array(3)).fill({}, 0).map((elem, index) => (
    {
        id: index,
        title: `same genre stub${index}`,
        date: 1998 + index,
        genre: 'Comedy',
        duration: '154',
        description: 'summer coming, summer coming, summer coming, summer coming, summer coming...',
    }));

const contentContainer = {
    display: 'flex',
    flexDirection: 'column',
    flex: 'auto',
};

const statusBarStyle = {
    background: 'ghostwhite',
    padding: '0 4em 0 4em',
};


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    getFilmsBySelectedFilmGenre() {
        if (this.state.selectedFilm.genre) {
            return sameGenreStub;
        }
        return [];
    }

    getCurrentSearchResult = () => (
        !this.state.currenSearchResult
            ? filmsStub
            : this.state.currenSearchResult
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

    search = (text) => {
        const searchResult = filmsStub.filter(film => (
            this.state.searchBy === 'title'
                ? film.title.search(text) !== -1
                : film.genre.search(text) !== -1
        ));

        this.setState({
            currenSearchResult: searchResult,
        });
    }
    render() {
        if (this.state.view === 'film') {
            return (
                <ErrorBoundary>
                    <div>
                        <FilmInfo
                            film={this.state.selectedFilm}
                            backCallBack={this.backToSearch}
                        />
                    </div>
                    <div style={statusBarStyle}>
                        Films by {this.state.selectedFilm.genre} genre
                    </div>
                    <div style={contentContainer}>
                        <Films
                            items={this.getFilmsBySelectedFilmGenre()}
                            onItemClick={this.selectFilm}
                        />
                    </div>
                </ErrorBoundary>
            );
        }

        return (
            <ErrorBoundary>
                <div>
                    <SearchBar searchCallBack={this.search} />
                </div>
                <div style={contentContainer}>
                    <SearchResult
                        items={this.getCurrentSearchResult()}
                        onItemClick={this.selectFilm}
                    />
                </div>
            </ErrorBoundary>
        );
    }
}

export default Main;
