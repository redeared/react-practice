import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { Main } from './index';
import { FilmInfo } from './film-Info';
import { SearchBar } from './search-bar';


// jest.mock('./search-result/empty-result.jsx', () => ({ EmptyResult: () => 'Nothing' }));

describe('Main', () => {
    it('should show filmInfo for film view state', () => {
        const main = shallow(<Main />);
        main.setState({
            view: 'film',
            selectedFilm: { genre: 'action' },
        });

        expect(main.find(FilmInfo).length).toBe(1);
    });

    it('just use enzyme', () => {
        const main = shallow(<Main />);
        console.log(main.find('#search-bar').debug());
        expect(main.contains('<div>FIND YOUR MOVIE</div >')).toBe(false);

        const wrapper = shallow((
            <div>
                <div data-foo="foo" data-bar="bar">Hello</div>
            </div>
        ));

        expect(wrapper.contains(<div data-foo="foo" data-bar="bar">Hello</div>)).toBe(true);
    });
});
