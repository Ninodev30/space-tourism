import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { States } from './pages/Context';
import GlobalStyle from './pages/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <States>
      <App/>
    </States>
    <GlobalStyle/>
  </React.StrictMode>
  
)