import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const numberOfCards: number = 5;

root.render(
  <React.StrictMode>
    <App offersCount={numberOfCards} />
  </React.StrictMode>
);
