import React from 'react';
import Item from './components/Item';

const Films = ({ items, onItemClick }) => (
    <span>
        {
            items.map(item => (
                <div
                    key={item.id}
                    onClick={() => onItemClick(item)}
                    role="presentation"
                >
                    <Item item={item} />
                </div>))
        }
    </span>
);

export default Films;
