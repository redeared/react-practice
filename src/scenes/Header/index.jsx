import React from 'react';
import { transparentPanel, highlightColor } from '../../styleguide/style';

const headerText = {
    ...highlightColor,
    fontWeight: 'bold',
    paddingLeft: '4em',
};

const Header = () => (
    <div style={transparentPanel}>
        <span style={headerText}> netflixroulette </span>
    </div>
);

export default Header;
