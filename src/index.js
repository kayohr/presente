import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginContext from './context/LoginProvider'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
      <LoginContext>
    <HashRouter>
        <App />
    </HashRouter>
      </LoginContext>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
