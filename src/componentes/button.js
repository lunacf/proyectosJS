import React from 'react';
import '../hojas-de-estilo/Button.css';

function Button(props){
    const esOperador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=');
    };

    return(
        <div className={`button-container ${esOperador(props.children) ? 'operador': ''}`.trimEnd()}
        onClick={() => props.click(props.children)}>
            {props.children}
        </div>
    );
}

export default Button;