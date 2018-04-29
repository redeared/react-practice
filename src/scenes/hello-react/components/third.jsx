
import React from 'react';

export class ThirdGreeting extends React.PureComponent {
    state = {
        greeting: 'Hello Word!',
    }
    render() {
        return (
            <React.Fragment>
                <span> {this.state.greeting} </span>
                <span> From third - React.PureComponent</span>
            </React.Fragment>
        );
    }
}

export default ThirdGreeting;
