console.log(soma(3, 4))
// console.log(sub(7, 3)) // not defined

// function declaration (pode chamar antes da declaração)
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(7, 3))

// named function expression
const mult = function mult(x, y) {
    return x * y
}

