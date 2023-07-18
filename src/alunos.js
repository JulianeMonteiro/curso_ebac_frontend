const alunos = [
  { nome: "João", nota: 10 },
  { nome: "Bárbara", nota: 5 },
  { nome: "Roberto", nota: 8 },
  { nome: "Igor", nota: 8 },
  { nome: "Fabiana", nota: 4 },
];

function retornaAlunosAprovados(aluno) {
  return aluno.nota >= 6;
}

const alunosAprovados = alunos.filter(retornaAlunosAprovados);

console.log(alunosAprovados);
