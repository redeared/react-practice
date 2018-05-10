import React from 'react';

const panelStyle = {
    background: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
};

export const BlackTransparentPanel = ({ style, children, ...rest }) => (
    <div style={{ ...panelStyle, ...style }} {...rest} >
        {children}
    </div>
);
