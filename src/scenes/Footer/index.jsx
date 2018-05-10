import React from 'react';
import { highlightColor } from '../../styleguide/style';
import { BlackTransparentPanel } from '../../components/BlackTransparentPanel';

const footerText = {
    ...highlightColor,
    fontWeight: 'bold',
    paddingLeft: '4em',
};

const Footer = () => (
    <BlackTransparentPanel>
        <span style={footerText}>netflixroulette</span>
    </BlackTransparentPanel>
);

export default Footer;
