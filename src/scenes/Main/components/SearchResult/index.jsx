import React, { Fragment } from 'react';
import Empty from './components/Empty';
import ItemsStatus from './components/ItemsStatus';
import ItemsSort from './components/ItemsSort';
import Films from '../Films';

const statusBarStyle = {
    background: 'ghostwhite',
    padding: '0 4em 0 4em',
};

const emptyStyle = {
    background: 'white',
    display: 'flex',
    flex: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
};

const SearchResult = ({ items, onItemClick }) => {
    if (items.length === 0) {
        return (
            <div style={emptyStyle}>
                <Empty />
            </div>
        );
    }
    return (
        <Fragment>
            <div style={statusBarStyle}>
                <ItemsStatus items={items} />
                <span style={{ float: 'right' }}>
                    <ItemsSort />
                </span>
            </div>
            <Films items={items} onItemClick={onItemClick} />
        </Fragment>
    );
};

export default SearchResult;
