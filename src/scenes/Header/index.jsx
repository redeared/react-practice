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
    zIndex: 1,
    paddingLeft: '4em',
};

const Header = () => (
    <div>
        <span style={textBlock}> netflixroulette </span>
        <div style={transparentDiv} />
    </div>
);

export default Header;
