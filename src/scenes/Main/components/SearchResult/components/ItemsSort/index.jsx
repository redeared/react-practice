import React, { Fragment, Component } from 'react';


class ItemsSort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortByRating: false,
            sortByReleaseDate: false,
            ...props.sortOrder,
        };
    }

    sortByDate = () => {
        this.setState((prev, props) => {
            props.changeSortOrder({
                sortByReleaseDate: !this.state.sortByReleaseDate,
                sortByRating: this.state.sortByRating,
            });
            return { sortByReleaseDate: !this.state.sortByReleaseDate };
        });
    }

    sortByRating = () => {
        this.setState((prev, props) => {
            props.changeSortOrder({
                sortByReleaseDate: this.state.sortByReleaseDate,
                sortByRating: !this.state.sortByRating,
            });
            return { sortByRating: !this.state.sortByRating };
        });
    }

    render() {
        return (
            <Fragment>
                Sort by:
                {' '}
                <span
                    style={this.state.sortByReleaseDate ? { color: '#f45362' } : {}}
                    onClick={this.sortByDate}
                    tabIndex="0"
                    role="button"
                    onKeyPress={this.sortByDate}
                >
                    release date
                </span>
                {' '}
                <span
                    style={this.state.sortByRating ? { color: '#f45362' } : {}}
                    onClick={this.sortByRating}
                    tabIndex="0"
                    role="button"
                    onKeyPress={this.sortByRating}
                >
                    rating
                </span>

            </Fragment>
        );
    }
}

export default ItemsSort;
