import React from 'react';
import ImagePreview from '../../../../components/ImagePreview';
import Rating from './components/Rating';

const style = {
    paddingLeft: '1em',
};

const background = {
    background: 'black',
    opacity: 0.7,
    color: 'white',
};

const FilmInfo = ({ film, backCallBack }) => (
    <div style={{ ...style, ...background }}>
        <div>
            <button onClick={() => backCallBack()}>SEARCH</button>
        </div>
        <ImagePreview src="" label={film.title} />
        <div>
            {film.title.toUpperCase()}
            {'  '}
            <Rating value="10/10" />
        </div>
        <div>
            {film.date} {'  '} {film.duration} min
        </div>
        <div>{film.description}</div>
    </div>
);

export default FilmInfo;
