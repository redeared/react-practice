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
    flex: '1 1 auto',
};
export const RowsLayout = ({ style, children, ...rest }) => (
    <div style={{ ...flexRowContainer, ...style }} {...rest} >
        {children}
    </div>
);
