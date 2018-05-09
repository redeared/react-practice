import React from 'react';
import './styles.css';

const ImagePreview = ({ src, label }) => <img className="img" src={src} alt={label} />;

export default ImagePreview;
