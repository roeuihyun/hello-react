import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const title = React.createElement('h1',null,'JSX Test');
const text = React.createElement('p',null,'Paragraph Text~');
const container = React.createElement('p',null,[title, text]);

ReactDOM.render(
  container,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
