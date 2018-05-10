import React from 'react';
import { highlightColor } from '../../styleguide/style';
import { BlackTransparentPanel } from '../../components/BlackTransparentPanel';

const headerText = {
    ...highlightColor,
    fontWeight: 'bold',
    paddingLeft: '4em',
};

const Header = () => (
    <BlackTransparentPanel>
        <span style={headerText}> netflixroulette </span>
    </BlackTransparentPanel>
);

export default Header;
