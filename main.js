const form = document.getElementById('form-atividade');
const imgArpovado = `<img src="images/aprovado.png" alt="emoji feliz">`
const imgReprovado = `<img src="/images/reprovado.png" alt="emoji triste" />`
let linhas = ` `;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adcionaLinhas();
    atualizaTabela();
});

function adcionaLinhas() {

    const imputNomeAtividade = document.getElementById('nome-atividade');
    const imputNotaAtividade = document.getElementById('nota-atividade');

    let linha = '<tr>';
    linha += `<td>${imputNomeAtividade.value}</td>`;
    linha += `<td>${imputNotaAtividade.value}</td>`;
    linha += `<td>${imputNotaAtividade.value >= 7 ? imgArpovado : imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}