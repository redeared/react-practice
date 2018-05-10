import React from 'react';
import { FilmRating } from './film-rating';
import { ImagePreview } from '../../../components/image-preview';
import { BlackTransparentPanel } from './../../../components/black-transparent-panel';

const style = {
    paddingLeft: '1em',
};

export const FilmInfo = ({ film, onBackToSearch }) => (
    <BlackTransparentPanel style={style}>
        <div>
            <button onClick={() => onBackToSearch()}>SEARCH</button>
        </div>
        <ImagePreview src="" label={film.title} />
        <div>
            {film.title.toUpperCase()}
            {'  '}
            <FilmRating value="10/10" />
        </div>
        <div>
            {film.date} {'  '} {film.duration} min
        </div>
        <div>{film.description}</div>
    </BlackTransparentPanel>
);
