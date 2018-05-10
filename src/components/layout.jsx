import React from 'react';

const flexColumnContainer = {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
};
export const ColumnsLayout = ({ style, children, ...rest }) => (
    <div style={{ ...flexColumnContainer, ...style }} {...rest} >
        {children}
    </div>
);

const flexRowContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
};
export const RowsLayout = ({ style, children, ...rest }) => (
    <div style={{ ...flexRowContainer, ...style }} {...rest} >
        {children}
    </div>
);

export const GrowLayoutBlock = ({ style, children, ...rest }) => (
    <div style={{ flexGrow: '1', ...style }} {...rest} >
        {children}
    </div>
);

export const FixedLayoutBlock = ({ style, basis, children, ...rest }) => (
    <div style={{ flexBasis: basis || 0, ...style }} {...rest} >
        {children}
    </div>
);
