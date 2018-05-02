import React from 'react';

const transparentDiv = {
    background: 'black',
    opacity: 0.7,
    height: '1.5em',
};

const textBlock = {
    color: 'pink',
    fontWeight: 'bold',
    position: 'absolute',
    paddingLeft: '4em',
    zIndex: 1,
};

const Footer = () => (
    <span>
        <span style={textBlock}>netflixroulette</span>
        <div style={transparentDiv} />
    </span>
);

export default Footer;
