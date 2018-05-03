import React, { Fragment, Component } from 'react';

class SearchFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: false,
            genre: false,
            ...props.filters,
        };
    }

    handleTitleClick = () => {
        this.setState((prev, props) => {
            props.changeFilter({
                title: !this.state.title,
                genre: this.state.genre,
            });
            return { title: !this.state.title };
        });
    }

    handleGenreClick = () => {
        this.setState((prev, props) => {
            props.changeFilter({
                title: this.state.title,
                genre: !this.state.genre,
            });
            return { genre: !this.state.genre };
        });
    }

    render() {
        return (
            <Fragment>
                <button style={this.state.title ? { backgroundColor: '#f45362' } : {}} onClick={this.handleTitleClick}>TITLE</button >
                <button style={this.state.genre ? { backgroundColor: '#f45362' } : {}} onClick={this.handleGenreClick}>GENRE</button >
            </Fragment>
        );
    }
}

export default SearchFilter;
