import React from 'react';
import ReactDOM from 'react-dom';
import './Ward.css';
import reportWebVitals from './reportWebVitals';
import Ward from "./Ward";

ReactDOM.render(
  <React.StrictMode>
    <Ward />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
