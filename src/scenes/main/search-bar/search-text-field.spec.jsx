import React from 'react';
import { shallow } from 'enzyme';
// import { create} from 'react-test-renderer';

import { SearchTextField } from './search-text-field';

describe('SearchTextField', () => {
    it('should call onChange when input field change', () => {
        // const comp = create(<SearchTextField />).toJSON();
        // expect(comp).toMatchSnapshot();
        let callCallback = false;
        const callBack = () => { callCallback = true; };
        const comp = shallow(<SearchTextField onChange={callBack} />);
        const eventMock = { target: { value: 'groovy movie' } };

        comp.find('input').simulate('change', eventMock);

        expect(callCallback).toBe(true);
    });

    it('should call onEnter when Enter pressed inside input field', () => {
        let callCallback = false;
        const callBack = () => { callCallback = true; };
        const comp = shallow(<SearchTextField
            onEnter={callBack}
        />);
        const eventMock = {
            key: 'Enter',
        };

        comp.find('input').simulate('keyPress', eventMock);

        expect(callCallback).toBe(true);
    });

    it('should  not call onEnter when noEnter key pressed inside input field', () => {
        let callCallback = false;
        const callBack = () => { callCallback = true; };
        const comp = shallow(<SearchTextField
            onEnter={callBack}
        />);
        const eventMock = {
            key: 'NotEnter',
        };

        comp.find('input').simulate('keyPress', eventMock);

        expect(callCallback).toBe(false);
    });
});
