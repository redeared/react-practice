import React from 'react';
import Item from './components/Item';

const style = {
    background: 'white',
    padding: '1em',
    flex: 'auto',
};

const itemStyle = {
    display: 'inline-block',
    width: '25%',
};

const Films = ({ items, onItemClick }) => {
    if (!items) {
        return null;
    }
    return (
        <div style={style}>
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
        </div>
    );
};

export default Films;
