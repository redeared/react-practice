import React from 'react';
import { create } from 'react-test-renderer';
import { ResultStatus } from './result-status';

describe('ResultStatus', () => {
    it('should render without crash', () => {
        const comp = create(<ResultStatus />).toJSON();
        expect(comp).toMatchSnapshot();
    });
});
