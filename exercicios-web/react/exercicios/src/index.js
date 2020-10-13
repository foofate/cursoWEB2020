import React from 'react';
import ReactDOM from 'react-dom';

import Saudacao from './componentes/Saudacao'

// const elemento = <h1>React 2</h1>;
ReactDOM.render(
    /* elemento */
    <div>
        <Saudacao tipo='Bom dia' nome='João'/>
    </div>
, document.getElementById('root'))