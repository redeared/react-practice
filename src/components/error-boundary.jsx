import React from 'react';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(err, info) {
        console.log('--err--');
        console.log(err);
        console.log('--info--');
        console.log(info);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ background: 'white', color: 'red' }}>
                    <h1>Something went wrong.</h1>
                </div>
            );
        }
        return this.props.children;
    }
}
