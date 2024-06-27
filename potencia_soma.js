const prompt = require('prompt-sync')()
console.log("Vamos calcular uma potência")
let base = prompt ("Base: ")
base = +base
let expoente = prompt("Expoente: ")
let resultado = base
let base_aux = base
for (let j = 0; j < expoente; j++){
    resultado = 0
    for (let i =0; i < base; i++){
    resultado += base_aux
}
    base_aux = resultado
}
console.log(resultado)