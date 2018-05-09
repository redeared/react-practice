import React, { Fragment, Component } from 'react';
import { highlightColor } from '../../../../../../styleguide/style';

class ItemsSort extends Component {
    getSortOrder = () => this.props.sortOrder;
    sortByDate = () => {
        this.props.changeSortOrder({
            sortByReleaseDate: !this.getSortOrder().sortByReleaseDate,
            sortByRating: this.getSortOrder().sortByRating,
        });
    }

    sortByRating = () => {
        this.props.changeSortOrder({
            sortByReleaseDate: this.getSortOrder().sortByReleaseDate,
            sortByRating: !this.getSortOrder().sortByRating,
        });
    }

    render() {
        return (
            <Fragment>
                Sort by:
                {' '}
                <span
                    style={this.getSortOrder().sortByReleaseDate ? highlightColor : {}}
                    onClick={this.sortByDate}
                    tabIndex="0"
                    role="button"
                    onKeyPress={this.sortByDate}
                >
                    release date
                </span>
                {' '}
                <span
                    style={this.getSortOrder().sortByRating ? highlightColor : {}}
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
