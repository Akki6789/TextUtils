import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
This index.js file inside the src folder is the entry point of my react app. 
 */

/*
  ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

Is function ReactDOM.render(); mein ho kya rha hai?

  Ans: 
  Jaha par id = 'root' wala element hai, waha par App component ko dal do.
  
  A div with id='root' is present in the index.html file inside the public folder

  App.js file which is present inside the src folder is the App component of my reat application my-app.
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
