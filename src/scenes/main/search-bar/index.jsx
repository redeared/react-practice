import React, { Component } from 'react';
import { BlackTransparentPanel } from '../../../components/black-transparent-panel';
import { SearchButton } from './search-button';
import { SearchTextField } from './search-text-field';
import { SearchFilter } from './search-filter';

const contentPadding = {
    paddingLeft: '4em',
    paddingRight: '4em',
};

const searchButtonPosition = { float: 'right' };

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { searchText: null };
    }

    updateSearchText = (text) => {
        this.setState({ searchText: text });
    };

    search = () => {
        this.props.onSearch(this.state.searchText);
    }

    updateFilter = (filters) => {
        this.props.updateSearchFilter({
            title: filters.title,
            genre: filters.genre,
        });
    }

    render() {
        return (
            <BlackTransparentPanel style={contentPadding}>
                <div>
                    FIND YOUR MOVIE
                </div>
                <div>
                    <SearchTextField
                        onChange={this.updateSearchText}
                        onEnter={this.search}
                    />
                </div>
                <div>
                    SEARCH BY: <SearchFilter
                        filters={this.props.filters}
                        changeFilter={this.updateFilter}
                    />
                    <div style={searchButtonPosition}>
                        <SearchButton onClick={this.search} />
                    </div>
                </div>
            </BlackTransparentPanel>
        );
    }
}
