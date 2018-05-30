import React from 'react';
import { shallow } from 'enzyme';

import { Main } from './index';
import { FilmInfo } from './film-Info';

describe('Main', () => {
    it('should show filmInfo for film view state', () => {
        const main = shallow(<Main />);
        main.setState({
            view: 'film',
            selectedFilm: { genre: 'action' },
        });

        expect(main.find(FilmInfo).length).toBe(1);
    });

    it('should correct work in view state when film in undefined', () => {
        const main = shallow(<Main />);
        main.setState({
            view: 'film',
            selectedFilm: {},
        });
    });

    it('should update currentSearchResult when search string', () => {
        const comp = shallow(<Main />);
        comp.setState({ ...comp.state(), scurrentSearchResult: null, searchByGenre: true });
        comp.instance().search('act');

        expect(comp.state().currentSearchResult).toBeDefined();
    });

    it('should update currentSearchResult when search string is empty', () => {
        const comp = shallow(<Main />);
        comp.setState({ ...comp.state(), scurrentSearchResult: null, searchByGenre: true });
        comp.instance().search(undefined);

        expect(comp.state().currentSearchResult).toBeDefined();
    });

    it('should return empty array by getFilmsBySelectedFilmGenre if selected film undefined', () => {
        const comp = shallow(<Main />);
        comp.setState({ ...comp.state(), selectedFilm: {} });


        expect(comp.state().currentSearchResult).toBeDefined();
    });
});
