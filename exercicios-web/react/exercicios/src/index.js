import React from 'react';
import ReactDOM from 'react-dom';

import Multi, { BoaNoite } from './componentes/Multiplos'

// const elemento = <h1>React 2</h1>;
ReactDOM.render(
    /* elemento */
    <div>
        <Multi.BoaTarde nome='Ana' />
        <BoaNoite nome='Bia' />
    </div>
, document.getElementById('root'))