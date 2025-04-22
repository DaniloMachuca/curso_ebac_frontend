function separaLinhas() {
  console.log("-------------------------------------------------------------------");
}
function geraAlunosENotas() {
  var alunos = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var alunosObjeto = alunos.map(aluno => {
    return {
      nome: aluno,
      nota: Math.floor(Math.random() * 10)
    };
  });
  return alunosObjeto;
}
alunos = geraAlunosENotas();
separaLinhas();
console.log("Os alunos são:\n", alunos);
var alunosFiltrados = alunos.filter(aluno => {
  return aluno.nota >= 6;
});
separaLinhas();
console.log("Os alunos aprovados são:\n", alunosFiltrados);
separaLinhas();