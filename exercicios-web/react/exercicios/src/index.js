import React from 'react';
import ReactDOM from 'react-dom';

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

// const elemento = <h1>React 2</h1>;
ReactDOM.render(
    /* elemento */
    <div>
        <Pai nome='Paulo' sobrenome='Silva'>
            <Filho nome='Pedro' />
            <Filho nome='Paulo' />
            <Filho nome='Carla' />
        </Pai>
    </div>
, document.getElementById('root'))