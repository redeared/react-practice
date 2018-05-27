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
});
