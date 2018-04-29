import React from 'react';
import ReactDOM from 'react-dom';

import { firstGreeting } from './components/first';
import { SecondGreeting } from './components/second';
import { ThirdGreeting } from './components/third';
import { FourthGreeting } from './components/fourth';

export const render4WaysOfGreeting = () => {
    const app = React.createElement(
        'div', null,
        '4 ways of greeting',
        <div id="first" />,
        <div id="second" />,
        <div id="third" />,
        <div id="fourth" />,
    );

    ReactDOM.render(app, document.getElementById('app'));

    ReactDOM.render(firstGreeting, document.getElementById('first'));
    ReactDOM.render(<SecondGreeting />, document.getElementById('second'));
    ReactDOM.render(<ThirdGreeting />, document.getElementById('third'));
    ReactDOM.render(<FourthGreeting visitor="World" />, document.getElementById('fourth'));
};

export default render4WaysOfGreeting;
