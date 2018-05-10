import React, { Component } from 'react';
import TextSearchField from './components/TextSearchField';
import SearchButton from './components/SearchButton';
import SearchFilter from './components/SearchFilter/intex';
import { BlackTransparentPanel } from '../../../../components/BlackTransparentPanel';

const contentPadding = {
    paddingLeft: '4em',
    paddingRight: '4em',
};

const searchButtonPosition = { float: 'right' };

class SearchBar extends Component {
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
                    <TextSearchField
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

export default SearchBar;
