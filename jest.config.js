module.exports = {
    bail: true,
    verbose: true,
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        '^.+\\.(css|scss|less)$': 'jest-css-modules-transform',
    },
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10,
        },
    },
};
