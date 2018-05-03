import React from 'react';

const ItemsStatus = ({ items }) => {
    if (!items) {
        return null;
    }
    return (
        <span> {items && items.length} movie{items && items.length > 1 && 's'} found </span>
    );
};

export default ItemsStatus;
