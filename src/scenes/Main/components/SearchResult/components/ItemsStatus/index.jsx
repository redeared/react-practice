import React from 'react';

const ItemsStatus = ({ items }) => (
    <span> {items.length} movie{items.length > 1 && 's'} found </span>
);


export default ItemsStatus;
