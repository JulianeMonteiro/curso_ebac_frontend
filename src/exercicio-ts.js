"use strict";
const calculaProduto = (numeroA, numeroB) => numeroA * numeroB;
function saudacaoNome(nome) {
    return "Olá " + nome;
    // Retorno com template string
    // return `Olá ${nome}`;
}
console.log(saudacaoNome("Juliane"));
console.log(calculaProduto(3, 6));
