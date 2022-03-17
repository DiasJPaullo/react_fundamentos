import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/globals.scss"
import App from './App';
import PrimeiroComponente from './PrimeiroComponente';


ReactDOM.render(
  <div className='container'>
    <PrimeiroComponente nome="React" ano={2022}/>
    <App />
  </div>,
  document.getElementById('root')
);

