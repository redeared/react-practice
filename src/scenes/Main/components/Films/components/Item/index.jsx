import React, { Fragment } from 'react';
import FilmCover from './components/FilmCover';

const Item = ({ item }) => (
    <Fragment>
        <FilmCover src="" label={item.title} />
        <div>
            {item.title.toUpperCase()}
            {'  '}
            {item.date}
        </div>
        <div>
            {item.genre}
        </div>
    </Fragment>
);

export default Item;
