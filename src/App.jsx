import React from 'react';
import { ColumnsLayout } from './components/layout-containers';
import { Header } from './scenes/header/index';
import { ErrorBoundary } from './components/error-boundary';
import { Main } from './scenes/main/index';
import { Footer } from './scenes/footer/index';

const bgImage = {
    backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/80ffdc60-07ad-4e9e-829f-7969df93981c/524ebc0c-5887-4814-9015-7551eeb56858/RU-en-20180423-popsignuptwoweeks-perspective_alpha_website_small.jpg')",
    margin: '0 2em',
};

const fullScreen = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    overflow: 'auto',
};

const boxRowHeader = {
    flex: '0 1 auto',
};

const boxRowFooter = {
    flex: '0 1 auto',
};

export const App = () => (
    <ColumnsLayout style={{ ...fullScreen, ...bgImage }}>
        <div style={boxRowHeader}>
            <Header />
        </div>

        <ErrorBoundary>
            <ColumnsLayout style={{ overflowY: 'auto' }}>
                <Main />
            </ColumnsLayout>
        </ErrorBoundary>

        <div style={boxRowFooter}>
            <Footer />
        </div>
    </ColumnsLayout>
);
