import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import { SearchBar } from './index';

describe('SearchBar', () => {
    it('should render without crash', () => {
        const comp = create(<SearchBar filters={{ title: false, genre: false }} />).toJSON();
        expect(comp).toMatchSnapshot();
    });

    it('should call onSearch props with state.searchText param', () => {
        let result = 'empty';
        const mockCallBack = () => { result = 'found'; };
        const comp = shallow(<SearchBar onSearch={mockCallBack} />);
        comp.instance().search();

        expect(result).toBe('found');
    });
});
