import React from 'react';
import renderer from 'react-test-renderer';
import { App } from './app';

describe('App', () => {
    it('renders without crashing', () => {
        const component = renderer.create(<App />).toJSON();
        expect(component).toMatchSnapshot();
    });
});
