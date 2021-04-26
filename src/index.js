import React from 'react';
import ReactDOM from 'react-dom';
import './Ward.css';
import reportWebVitals from './reportWebVitals';
import Ward from "./Ward";

ReactDOM.render(
  <React.StrictMode>
    <Ward />
    <p><small>Coded by <strong>Kat Alex</strong> and stored in <a href="https://github.com/Warkat708/lemon-difficult/commits?author=Warkat708">Github</a></small></p> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
