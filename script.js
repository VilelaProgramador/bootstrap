document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();
    adicionarLinha();
});

function adicionarLinha() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    if (nome && telefone) {
        const tabela = document.getElementById('tabelaContatos').getElementsByTagName('tbody')[0];
        const novaLinha = tabela.insertRow();

        const celulaNome = novaLinha.insertCell(0);
        const celulaTelefone = novaLinha.insertCell(1);
        const celulaAcoes = novaLinha.insertCell(2);

        celulaNome.innerText = nome;
        celulaTelefone.innerText = telefone;

        const botaoDeletar = document.createElement('button');
        botaoDeletar.innerText = 'Deletar';
        botaoDeletar.onclick = function () {
            tabela.deleteRow(novaLinha.rowIndex - 1);
        };
        celulaAcoes.appendChild(botaoDeletar);

        document.getElementById('formCadastro').reset();
    } else {
        alert("Preencha todos os campos!");
    }
}