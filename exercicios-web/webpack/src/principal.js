// const Pessoa = require('./pessoa');
import Pessoa from './pessoa';

// npm start && node dist/main.js
// vai encontrar a pasta módulos através do principal.js como entry
import './modulos/moduloA';
import './assets';

const atendente = new Pessoa;
console.log(atendente.cumprimentar());