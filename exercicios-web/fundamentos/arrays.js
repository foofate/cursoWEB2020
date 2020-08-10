const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[valores.length - 1], valores[1], valores[4])

valores[4] = 10.0
console.log(valores)
valores[8] = 5.0
console.log(valores)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)