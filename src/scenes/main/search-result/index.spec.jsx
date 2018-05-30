import React from 'react';
import { shallow } from 'enzyme';

import { create } from 'react-test-renderer';
import { SearchResult } from './index';

describe('SearchResult', () => {
    it('should render without crash', () => {
        const comp = create(<SearchResult
            items={[{ title: 'title' }]}
            onItemClick={() => 'nothing'}
        />).toJSON();
        expect(comp).toMatchSnapshot();
    });

    it('should update filters on updateFilters', () => {
        const comp = shallow(<SearchResult />);
        comp.setState({
            ...comp.state(), sortByRating: false, sortByReleaseDate: false,
        });
        comp.instance().updateFilters({ sortByRating: true, sortByReleaseDate: true });

        expect(comp.state().sortByRating).toBe(true);
        expect(comp.state().sortByReleaseDate).toBe(true);
    });

    it('should sort items first by rating, second by Date', () => {
        const first = { date: 2000, rating: 10 };
        const second = { date: 2001, rating: 8 };
        const third = { date: 2000, rating: 8 };
        const fourth = { date: 2001, rating: 7 };

        const items = [fourth, third, second, first];

        const comp = shallow(<SearchResult items={items} />);
        comp.setState({
            ...comp.state(), sortByRating: true, sortByReleaseDate: true,
        });

        expect(comp.instance().getSortedItems()[0]).toBe(first);
        expect(comp.instance().getSortedItems()[1]).toBe(second);
        expect(comp.instance().getSortedItems()[2]).toBe(third);
        expect(comp.instance().getSortedItems()[3]).toBe(fourth);
    });

    it('should return [] by getItems if items input param is not array ', () => {
        const comp = shallow(<SearchResult items={{}} />);
        expect(comp.instance().getItems()).toEqual([]);
    });
});
