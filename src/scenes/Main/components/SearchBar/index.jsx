import React from 'react';
import SearchField from './components/SearchField';
import SearchButton from './components/SearchButton';
import SearchFilter from './components/SearchFilter/intex';

const SearchBar = () => (
    <div>
        <div>
            FIND YOUR MOVIE
        </div>
        <div>
            <SearchField />
        </div>
        <div>
            SEARCH BY: <SearchFilter />
            <SearchButton />
        </div>
    </div>
);

export default SearchBar;
