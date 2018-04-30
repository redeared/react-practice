import React, { Fragment } from 'react';
import Empty from './components/Empty';
import ItemsStatus from './components/ItemsStatus';
import ItemsSort from './components/ItemsSort';
import Films from '../Films';

const SearchResult = ({ items, onItemClick }) => {
    if (items.length === 0) {
        return <Empty />;
    }
    return (
        <Fragment>
            <div>
                <ItemsStatus items={items} />
                <ItemsSort />
            </div>
            <div>
                <hr />
                <Films items={items} onItemClick={onItemClick} />
            </div>
        </Fragment>
    );
};

export default SearchResult;
