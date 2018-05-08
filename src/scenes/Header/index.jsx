import React from 'react';
import { transparentPanel, hightLightColor } from '../../styleguide/style';

const headerText = {
    fontWeight: 'bold',
    paddingLeft: '4em',
};

const Header = () => (
    <div style={transparentPanel}>
        <span style={{ ...hightLightColor, ...headerText }}> netflixroulette </span>
    </div>
);

export default Header;
