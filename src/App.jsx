import React from 'react';
import Main from './scenes/Main';
import Header from './scenes/Header';
import Footer from './scenes/Footer';
import { ColumnsLayout } from './components/LayoutContainers';
import ErrorBoundary from './components/ErrorBoundary';

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

const App = () => (
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

export default App;
