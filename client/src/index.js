import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { RecoilRoot } from 'recoil';
import { GlobalStyles, Theme } from 'style';
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
