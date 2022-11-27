import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { RecoilRoot } from 'recoil';
import { GlobalStyles, Theme } from 'style';

import 'bootstrap/dist/css/bootstrap.min.css';

import { worker } from './mocks/worker';
if (process.env.NODE_ENV === 'development') {
  worker.start();
}

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <>
    <GlobalStyles theme={Theme} />
    <RecoilRoot>
      <Router>
        <App />
      </Router>
    </RecoilRoot>
  </>,
);
