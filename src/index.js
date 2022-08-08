import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './assets/styles/GlobalStyles';
import { States } from './assets/pages/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <States>
      <App/>
    </States>
    <GlobalStyle/>
  </React.StrictMode>
  
)