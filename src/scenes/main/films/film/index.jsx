import React, { Fragment } from 'react';
import { FilmCover } from './film-cover';
import { FilmReleaseDate } from './film-release-date';

export const Film = ({ value }) => (
    <Fragment>
        <FilmCover src="" label={value.title} />
        <div>
            {value.title.toUpperCase()}
            {'  '}
            <FilmReleaseDate value={value.date} />
        </div>
        <div>
            {value.genre}
        </div>
    </Fragment>
);
