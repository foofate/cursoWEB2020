// não aceita repetição / não indexado
const drags = new Set()
drags.add('Bianca Del Rio')
drags.add('Valentina')
drags.add('Detox').add('Katya').add('Raja')
drags.add('Valentina')

console.log(drags)
console.log(drags.size)
console.log(drags.has('Katya'))
console.log(drags.has('katya'))
drags.delete('Valentina')
console.log(drags.has('Valentina'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)