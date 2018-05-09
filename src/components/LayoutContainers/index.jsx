import React from 'react';

const flexColumnContainer = {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
};
export const ColumnsLayout = props =>
    <div style={{ ...props.style, ...flexColumnContainer }}> {props.children} </div >;

const flexRowContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: '1 1 auto',
};
export const RowsLayout = props =>
    <div style={{ ...props.style, ...flexRowContainer }} > {props.children} </div>;
