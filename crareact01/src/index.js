import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {Youtube} from "./Youtube.js"
import reportWebVitals from './reportWebVitals';


const reactElement = React.createElement(
  "a" , 
  {
    href : "http://google.com" , 
    target : "_blank"
  }
  ,"click here to go to google "
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    reactElement
    {/* <Youtube/> */}
  </React.StrictMode>
);

reportWebVitals();
