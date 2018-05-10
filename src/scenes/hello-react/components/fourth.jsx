import React from 'react';

export const FourthGreeting = ({ visitor = 'World!' }) =>
    <h1> Hello{visitor && ' '}{visitor}. From fourth - functional component </h1>;
