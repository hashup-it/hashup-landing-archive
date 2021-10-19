import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './__styles__/GlobalStyle.style';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);

