import React from 'react'

export const BoaTarde = props => <h1>Boa tarde, {props.nome}!</h1>

const BoaNoite = props => <h1>Boa noite, {props.nome}!</h1>

export { BoaNoite }

export default { BoaTarde, BoaNoite }