import { createRoot } from 'react-dom/client';
import React from 'react';

import App from './App.tsx';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const rootElem = document.getElementById('root');

if (rootElem) {
    const root = createRoot(rootElem);
    root.render(
        <React.StrictMode>
            <Router basename='/React--Pizza__TS/'>
                <Provider store={store}>
                    <App />
                </Provider>
            </Router>
        </React.StrictMode>
    );
}
