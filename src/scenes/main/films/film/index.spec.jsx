import React from 'react';
import { create } from 'react-test-renderer';

import { Film } from './index';

describe('Film', () => {
    it('should render without crash', () => {
        const comp = create(<Film value={{ title: 'title', date: 'date' }} />).toJSON();

        expect(comp).toMatchSnapshot();
    });
});
