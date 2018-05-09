import React, { Fragment, Component } from 'react';
import { highlightColor } from '../../../../../../styleguide/style';

const activeSearchOption = { backgroundColor: highlightColor.color };
class SearchFilter extends Component {
    getFilters = () => this.props.filters;
    handleTitleClick = () => {
        this.props.changeFilter({
            title: !this.getFilters().title,
            genre: this.getFilters().genre,
        });
    }

    handleGenreClick = () => {
        this.props.changeFilter({
            title: this.getFilters().title,
            genre: !this.getFilters().genre,
        });
    }

    render() {
        return (
            <Fragment>
                <button
                    style={this.getFilters().title ? activeSearchOption : {}}
                    onClick={this.handleTitleClick}
                >
                    TITLE
                </button >
                <button
                    style={this.getFilters().genre ? activeSearchOption : {}}
                    onClick={this.handleGenreClick}
                >
                    GENRE
                </button >
            </Fragment>
        );
    }
}

export default SearchFilter;
