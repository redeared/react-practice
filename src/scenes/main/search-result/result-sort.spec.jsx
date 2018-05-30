import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import { ResultSort } from './result-sort';

describe('ResultSort', () => {
    it('should rendered without chash', () => {
        const comp = create(<ResultSort
            sortOrder={{
                sortByRating: false,
                sortByReleaseDate: false,
            }}
            changeSortOrder={() => 'empty'}
        />).toJSON();
        expect(comp).toMatchSnapshot();
    });
    it('should call changeSortOrder with invert sortByRating option when click on "rating"', () => {
        let sortByRating = false;

        const comp = shallow(<ResultSort
            sortOrder={{
                sortByRating,
                sortByReleaseDate: false,
            }}
            changeSortOrder={(value) => { ({ sortByRating } = value); }}
        />);

        const ratingBlock = comp.findWhere(n => n.props().children === 'rating');
        ratingBlock.simulate('click');
        expect(sortByRating).toBe(true);
    });
});
