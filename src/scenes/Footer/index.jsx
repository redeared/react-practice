import React from 'react';
import { transparentPanel, highlightColor } from '../../styleguide/style';

const footerText = {
    ...highlightColor,
    fontWeight: 'bold',
    paddingLeft: '4em',
};

const Footer = () => (
    <div style={transparentPanel}>
        <span style={footerText}>netflixroulette</span>
    </div>
);

export default Footer;
