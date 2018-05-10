import React from 'react';
import { Film } from './film';
import { RowsLayout, FixedLayoutBlock } from '../../../components/layout';

export const Films = ({ items, onItemClick }) => {
    if (!items) {
        return null;
    }
    return (
        <RowsLayout style={{ background: 'white', overflowY: 'auto' }}>
            {
                items.map(item => (
                    <FixedLayoutBlock
                        basis="25%"
                        key={item.id}
                        onClick={() => onItemClick(item)}
                        role="presentation"
                    >
                        <Film value={item} />
                    </FixedLayoutBlock>))
            }
        </RowsLayout >
    );
};
