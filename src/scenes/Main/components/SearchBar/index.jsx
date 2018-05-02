import React from 'react';
import SearchField from './components/SearchField';
import SearchButton from './components/SearchButton';
import SearchFilter from './components/SearchFilter/intex';

const style = {
    background: 'black',
    opacity: 0.7,
    color: 'white',
    paddingLeft: '4em',
    paddingRight: '4em',
};

const SearchBar = () => (
    <div style={style}>
        <div>
            FIND YOUR MOVIE
        </div>
        <div>
            <SearchField />
        </div>
        <div>
            SEARCH BY: <SearchFilter />
            <div style={{ float: 'right' }}>
                <SearchButton />
            </div>
        </div>
    </div>
);

export default SearchBar;
