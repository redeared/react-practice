import React from 'react';

export class SecondGreeting extends React.Component {
    state = {
        name: 'second',
    }

    render() {
        return (
            <p>Hello Word! From {this.state.name} - React.Component </p>
        );
    }
}
