import React from 'react';
import { transparentPanel, highlightColor } from '../../styleguide/style';

const footerText = {
    color: highlightColor.color,
    fontWeight: 'bold',
    paddingLeft: '4em',
};

const Footer = () => (
    <span style={transparentPanel}>
        <span style={footerText}>netflixroulette</span>
    </span>
);

export default Footer;
