import React from 'react';

const background = {
    background: 'black',
    opacity: 0.7,
    height: '1.5em',
};

const headerText = {
    color: '#f45362',
    fontWeight: 'bold',
    position: 'absolute',
    zIndex: 1,
    paddingLeft: '4em',
};

const Header = () => (
    <div>
        <span style={headerText}> netflixroulette </span>
        <div style={background} />
    </div>
);

export default Header;
