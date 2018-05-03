import React, { Component } from 'react';
import ErrorBoundary from './../../components/ErrorBoundary';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import FilmInfo from './components/FilmInfo';
import Films from './components/Films';

const initialState = {
    searchByTitle: true,
    searchByGenre: false,
    sortBy: 'date',
    view: 'search',
    selectedFilm: null,
    currenSearchResult: null,
};

const genres = ['Action', 'Comedy', 'Thriller', 'Fantasy', 'Adventure'];
const get2RandomGeners = () => `${genres[Math.floor((Math.random() * genres.length))]}, ${genres[Math.floor((Math.random() * genres.length))]}`;

const filmsStub = (new Array(50)).fill({}, 0).map((elem, index) => (
    {
        id: index,
        title: `stub${index} ${genres[index % genres.length]}`,
        date: 1998 + index,
        genre: get2RandomGeners(),
        duration: '165',
        description: 'winter coming, winter coming, winter coming, winter coming, winter coming...',
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

const searchByGenre = (genresStr) => {
    if (genresStr && genresStr.split) {
        const geners = genresStr.split(',').map(v => v.trim().toLowerCase());
        return filmsStub.reduce((prev, curr) => {
            const filmGenre = curr.genre.split(',').map(v => v.trim().toLowerCase());
            const allGenreFound = geners.every(g => filmGenre.find(filmG => filmG === g));
            return allGenreFound ? [...prev, curr] : prev;
        }, []);
    }
    return [];
};

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    getFilmsBySelectedFilmGenre() {
        const filmGenre = this.state.selectedFilm.genre;
        if (filmGenre) {
            return searchByGenre(filmGenre);
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

    updateSearchFilter = (filters) => {
        this.setState({
            searchByTitle: filters.title,
            searchByGenre: filters.genre,
        });
    }

    search = (text) => {
        const searchResult = filmsStub.filter((film) => {
            const str = text.toLowerCase();
            const foundTitle = this.state.searchByTitle
                && film.title.toLowerCase().search(str) !== -1;
            const foundGenre = this.state.searchByGenre
                && film.genre.toLowerCase().search(str) !== -1;
            return foundTitle || foundGenre;
        });

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
                    <SearchBar
                        searchCallBack={this.search}
                        filters={{
                            title: this.state.searchByTitle,
                            genre: this.state.searchByGenre,
                        }}
                        updateSearchFilter={this.updateSearchFilter}
                    />
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
