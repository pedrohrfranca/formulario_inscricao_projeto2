const form = document.getElementById('form-participante');
let nomes = []; // Array para armazenar as atividades
let telefones = []; // Array para armazenar as notas

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionalLinha();
    atualizaTabela();
});

function adicionalLinha() {
    const inputNomeParticipante = document.getElementById('nome-participante');
    const inputTelefoneParticipante = document.getElementById('telefone-participante');

    if (nomes.includes(inputNomeParticipante.value)) {
        alert(`O participante ${inputNomeParticipante.value} já foi inserido`);
    } else {
        nomes.push(inputNomeParticipante.value);
        telefones.push(parseFloat(inputTelefoneParticipante.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeParticipante.value}</td>`;
        linha += `<td>${inputTelefoneParticipante.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeParticipante.value = '';
    inputTelefoneParticipante.value = '';
}

function atualizaTabela() {
    const tabela = document.querySelector('table tbody');
    tabela.innerHTML = linhas;
}
