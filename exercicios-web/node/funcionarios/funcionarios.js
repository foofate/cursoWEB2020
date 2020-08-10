const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const moraNaChina = f => f.pais === 'China'
const sexoFeminino = f => f.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    //mulher chinesa com menor salário
    const resultado = funcionarios.filter(moraNaChina).filter(sexoFeminino).reduce(menorSalario)
    console.log(resultado)
})