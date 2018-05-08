import React, { Component } from 'react';
import SearchField from './components/SearchField';
import SearchButton from './components/SearchButton';
import SearchFilter from './components/SearchFilter/intex';
import { transparentPanel } from '../../../../styleguide/style';

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

    searchCallBack = () => {
        this.props.searchCallBack(this.state.searchText);
    }

    updateFilter = (filters) => {
        this.props.updateSearchFilter({
            title: filters.title,
            genre: filters.genre,
        });
    }

    render() {
        return (
            <div style={{ ...transparentPanel, ...contentPadding }}>
                <div>
                    FIND YOUR MOVIE
                </div>
                <div>
                    <SearchField
                        inputCallBack={this.updateSearchText}
                        enterCallBack={this.searchCallBack}
                    />
                </div>
                <div>
                    SEARCH BY: <SearchFilter
                        filters={this.props.filters}
                        changeFilter={this.updateFilter}
                    />
                    <div style={searchButtonPosition}>
                        <SearchButton onClick={this.searchCallBack} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;
