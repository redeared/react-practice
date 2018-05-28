import { create } from 'react-test-renderer';
import React from 'react';
import { SearchBar } from './index';

describe('SearchBar', () => {
    it('should render without crash', () => {
        const comp = create(<SearchBar filters={{ title: false, genre: false }} />).toJSON();
        expect(comp).toMatchSnapshot();
    });
});
