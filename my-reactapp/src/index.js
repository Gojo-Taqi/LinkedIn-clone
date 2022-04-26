import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import './App.css'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './Login/login';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from './Signup/signup';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>

      <Routes>
        <Route path='/app' element={<App />} />
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
