import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import { ResultStatus } from './result-status';

describe('ResultStatus', () => {
    it('should render without crash', () => {
        const comp = create(<ResultStatus items={['empty']} />).toJSON();
        expect(comp).toMatchSnapshot();
    });

    it('should not rendered without items', () => {
        const comp = shallow(<ResultStatus />);

        expect(comp.getElement()).toBe(null);
    });
});
