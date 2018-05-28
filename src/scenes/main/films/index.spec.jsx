import React from 'react';
import { shallow } from 'enzyme';

import { Films } from './index';


describe('Films', () => {
    it('should not rendered without items', () => {
        const comp = shallow(<Films />);
        expect(comp.getElement()).toBe(null);
    });
});
