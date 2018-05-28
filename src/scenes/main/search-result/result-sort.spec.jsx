import React from 'react';
import { create } from 'react-test-renderer';

import { ResultSort } from './result-sort';

describe('ResultSort', () => {
    it('should render without chash', () => {
        const comp = create(<ResultSort
            sortOrder={{
                sortByRating: false,
                sortByReleaseDate: false,
            }}
            changeSortOrder={() => 'empty'}
        />).toJSON();
        expect(comp).toMatchSnapshot();
    });
});
