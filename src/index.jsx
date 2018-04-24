import React from "react";
import ReactDOM from 'react-dom';

import { firstGreeting } from './hello-react/first'
import { SecondGreeting } from './hello-react/second'
import { ThirdGreeting } from './hello-react/third'
import { FourthGreeting } from './hello-react/fourth'

export const app = React.createElement(
    "h1", null,
    "4 ways of greeting",
    <div id="first"></div>,
    <div id="second"></div>,
    <div id="third"></div>,
    <div id="fourth"></div>,
);

ReactDOM.render(app, document.getElementById("app"));

ReactDOM.render(firstGreeting, document.getElementById("first"));
ReactDOM.render(<SecondGreeting />, document.getElementById("second"));
ReactDOM.render(<ThirdGreeting />, document.getElementById('third'));
ReactDOM.render(<FourthGreeting visitor="World" />, document.getElementById('fourth'));