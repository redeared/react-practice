import TestRenderer from 'react-test-renderer';
import React from 'react';
import { FilmInfo } from './index';

describe('FilmInfo', () => {
    it('should render without crash', () => {
        const comp = TestRenderer.create(<FilmInfo film={{ title: 'some' }} />).toJSON();
        expect(comp).toMatchSnapshot();
    });
});
