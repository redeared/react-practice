import React from 'react';
import Item from './components/Item';
import { RowsLayout } from '../../../../components/LayoutContainers';

const itemStyle = {
    width: '25%',
};

const Films = ({ items, onItemClick }) => {
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
                        <Item item={item} />
                    </div>))
            }
        </RowsLayout >
    );
};

export default Films;
