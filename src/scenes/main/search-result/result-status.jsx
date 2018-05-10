import React from 'react';

export const ResultStatus = ({ items }) => {
    if (!items) {
        return null;
    }
    return (
        <span> {items && items.length} movie{items && items.length > 1 && 's'} found </span>
    );
};
