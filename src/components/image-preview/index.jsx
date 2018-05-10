import React from 'react';
import './styles.css';

export const ImagePreview = ({ src, label }) => <img className="img" src={src} alt={label} />;
