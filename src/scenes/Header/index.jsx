import React from 'react';
import { highlightColor } from '../../styleguide/style';
import { BlackTransparentPanel } from '../../components/black-transparent-panel';

const headerText = {
    color: highlightColor,
    fontWeight: 'bold',
    paddingLeft: '4em',
};

export const Header = () => (
    <BlackTransparentPanel>
        <span style={headerText}> netflixroulette </span>
    </BlackTransparentPanel>
);
