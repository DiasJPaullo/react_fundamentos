import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/globals.scss"
import Formulario from './components/Formulario'
import Lista from './components/Lista'



ReactDOM.render(
  <div className='container'>
    <Formulario />
    <Lista />
  </div>,
  document.getElementById('root')
);

