import React from 'react';
import { Film } from './film';
import { RowsLayout } from '../../../components/layout-containers';

const itemStyle = {
    flex: '1 1 25%',
};

export const Films = ({ items, onItemClick }) => {
    if (!items) {
        return null;
    }
    return (
        <RowsLayout style={{ background: 'white', overflowY: 'auto' }}>
            {
                items.map(item => (
                    <div
                        style={itemStyle}
                        key={item.id}
                        onClick={() => onItemClick(item)}
                        role="presentation"
                    >
                        <Film value={item} />
                    </div>))
            }
        </RowsLayout >
    );
};
