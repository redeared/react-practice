import React from 'react';
export const FourthGreeting = ({ visitor = 'World!' }) => {
    return <h1> Hello{visitor && ' '}{visitor}. From fourth - functional component </h1>;
}