import React from 'react';

const background = {
    background: 'black',
    opacity: 0.7,
    height: '1.5em',
};

const footerText = {
    color: '#f45362',
    fontWeight: 'bold',
    position: 'absolute',
    paddingLeft: '4em',
    zIndex: 1,
};

const Footer = () => (
    <span>
        <span style={footerText}>netflixroulette</span>
        <div style={background} />
    </span>
);

export default Footer;
