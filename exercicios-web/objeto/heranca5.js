console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.toLowerCase().split('').reverse().join('')
}

console.log('Gustavo'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c', 'd', 'e'].first())

String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Gustavo'.reverse())