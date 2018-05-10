import React from 'react';
import { ImagePreview } from '../../../../components/image-preview';

export const FilmCover = ({ src, label }) => (
    <ImagePreview src={src} label={label} />
);
