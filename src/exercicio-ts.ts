const calculaProduto = (numeroA: number, numeroB: number): number =>
  numeroA * numeroB;

function saudacaoNome(nome: string): string {
  return "Olá " + nome;

  // Retorno com template string
  // return `Olá ${nome}`;
}

console.log(saudacaoNome("Juliane"));

console.log(calculaProduto(3, 6));
