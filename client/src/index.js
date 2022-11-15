import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { RecoilRoot } from 'recoil';
import { GlobalStyles, Theme } from './style/index';

import 'bootstrap/dist/css/bootstrap.min.css';

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
