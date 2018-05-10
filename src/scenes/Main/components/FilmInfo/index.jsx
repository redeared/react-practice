import React from 'react';
import ImagePreview from '../../../../components/ImagePreview';
import Rating from './components/Rating';
import { BlackTransparentPanel } from '../../../../components/BlackTransparentPanel';

const style = {
    paddingLeft: '1em',
};

const FilmInfo = ({ film, onBackToSearch }) => (
    <BlackTransparentPanel style={style}>
        <div>
            <button onClick={() => onBackToSearch()}>SEARCH</button>
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
    </BlackTransparentPanel>
);

export default FilmInfo;
