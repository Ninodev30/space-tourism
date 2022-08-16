import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './pages/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>

)