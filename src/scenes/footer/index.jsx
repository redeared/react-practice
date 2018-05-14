import React from 'react';
import { highlightColor } from '../../styleguide/style';
import { BlackTransparentPanel } from '../../components/black-transparent-panel';

const footerText = {
    color: highlightColor,
    fontWeight: 'bold',
    paddingLeft: '4em',
};

export const Footer = () => (
    <BlackTransparentPanel>
        <span style={footerText}>netflixroulette</span>
    </BlackTransparentPanel>
);
