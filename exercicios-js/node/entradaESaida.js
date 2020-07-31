const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anonimo!\n')
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { //Evento 'data' ocorre quando usuário aperta o ENTER! (inclui \n)
        const nome = data.toString().replace('\n', ' ')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}