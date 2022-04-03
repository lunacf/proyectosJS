import './App.css';
import imagenLogo from './imagenes/react-prueba-calcu.jpg'
import Button from './componentes/button';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const calcRes = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };

  return (
    <div className='App'>
      <div className='carlos-logo-contenedor'>
        <img
          src={imagenLogo}
          className='carlos'
          alt='Logo de Carlos' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
       
        <div className='fila'>
          <Button click={addInput}>1</Button>
          <Button click={addInput}>2</Button>
          <Button click={addInput}>3</Button>
          <Button click={addInput}>+</Button>
        </div>
        <div className='fila'>
          <Button click={addInput}>4</Button>
          <Button click={addInput}>5</Button>
          <Button click={addInput}>6</Button>
          <Button click={addInput}>-</Button>
        </div>
        <div className='fila'>
          <Button click={addInput}>7</Button>
          <Button click={addInput}>8</Button>
          <Button click={addInput}>9</Button>
          <Button click={addInput}>*</Button>
        </div>
        <div className='fila'>
          <Button click={calcRes}>=</Button>
          <Button click={addInput}>0</Button>
          <Button click={addInput}>.</Button>
          <Button click={addInput}>/</Button>
        </div>
        <div className='fila'>
          <BotonClear clear = {() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;