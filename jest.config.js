module.exports = {
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
        '^.+\\.(css|scss|less)$': 'jest-css-modules-transform',
    },
    coverageThreshold: {
        global: {
            branches: 60,
            functions: 60,
            lines: 60,
            statements: 60,
        },
    },
    setupTestFrameworkScriptFile: './testframawork-configure.js',
};
