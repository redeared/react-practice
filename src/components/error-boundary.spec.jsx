import React from 'react';
import { shallow } from 'enzyme';
import { ErrorBoundary } from './error-boundary';

describe('ErrorBoundary', () => {
    it('componentDidCatch method should set state hasError=true', () => {
        const comp = shallow(<ErrorBoundary> child </ErrorBoundary>);
        comp.instance().componentDidCatch();

        expect(comp.state().hasError).toBe(true);
    });

    it('should return error notification view, if has error state is true', () => {
        const comp = shallow(<ErrorBoundary> child </ErrorBoundary>);
        comp.setState({ hasError: true });
        comp.update();

        expect(comp.contains(<h1>Something went wrong.</h1>)).toBe(true);
    });
});
