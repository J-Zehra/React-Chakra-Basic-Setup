
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from './App';
import { AppContext } from './context/AppContext';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </StrictMode>
);
