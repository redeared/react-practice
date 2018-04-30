import React, { Component } from 'react';
import ErrorBoundary from './../../components/ErrorBoundary';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import FilmInfo from './components/FilmInfo';
import Films from './components/Films';

const initialState = {
    filter: 'gender',
    sort: 'date',
    view: 'search',
    selectedFilm: null,
};

const filmsStub = (new Array(2)).fill({}, 0).map((elem, index) => (
    {
        id: index,
        title: `stub${index}`,
        date: 1998 + index,
        genre: 'Action',
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

class Main extends Component {
    state = initialState;
    getFilmsBySelectedFilmGenre() {
        if (this.state.selectedFilm.genre) {
            return sameGenreStub;
        }
        return [];
    }

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

    render() {
        if (this.state.view === 'film') {
            return (
                <div>
                    <ErrorBoundary>
                        <div>
                            <FilmInfo
                                film={this.state.selectedFilm}
                                backCallBack={this.backToSearch}
                            />
                        </div>
                        <div>
                            <hr />
                            Films by {this.state.selectedFilm.genre} genre
                        </div>
                        <div>
                            <hr />
                            <Films
                                items={this.getFilmsBySelectedFilmGenre()}
                                onItemClick={this.selectFilm}
                            />
                        </div>
                    </ErrorBoundary>
                </div>
            );
        }

        return (
            <div>
                <ErrorBoundary>
                    <div>
                        <SearchBar />
                    </div>
                    <div>
                        <hr />
                        <SearchResult
                            items={filmsStub}
                            onItemClick={this.selectFilm}
                        />
                    </div>
                </ErrorBoundary>
            </div>
        );
    }
}

export default Main;
