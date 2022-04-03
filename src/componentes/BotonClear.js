import React from 'react';
import '../hojas-de-estilo/clearButton.css';

const BotonClear = (props) => (
  <div className='boton-clear' onClick={props.clear}>
    {props.children}
  </div>
);

export default BotonClear;