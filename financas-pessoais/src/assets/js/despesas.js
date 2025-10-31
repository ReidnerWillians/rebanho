// despesas.js

// Função para adicionar uma nova despesa
function adicionarDespesa() {
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const categoria = document.getElementById('categoria').value;
    const data = document.getElementById('data').value;

    if (descricao && !isNaN(valor) && categoria && data) {
        const despesa = {
            descricao,
            valor,
            categoria,
            data
        };
        salvarDespesa(despesa);
        exibirDespesas();
        limparFormulario();
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

// Função para salvar a despesa no armazenamento local
function salvarDespesa(despesa) {
    let despesas = JSON.parse(localStorage.getItem('despesas')) || [];
    despesas.push(despesa);
    localStorage.setItem('despesas', JSON.stringify(despesas));
}

// Função para exibir as despesas na tabela
function exibirDespesas() {
    const despesas = JSON.parse(localStorage.getItem('despesas')) || [];
    const tabela = document.getElementById('tabela-despesas');
    tabela.innerHTML = '';

    despesas.forEach((despesa, index) => {
        const row = tabela.insertRow();
        row.insertCell(0).innerText = despesa.descricao;
        row.insertCell(1).innerText = despesa.valor.toFixed(2);
        row.insertCell(2).innerText = despesa.categoria;
        row.insertCell(3).innerText = despesa.data;
        const btnExcluir = document.createElement('button');
        btnExcluir.innerText = 'Excluir';
        btnExcluir.onclick = () => excluirDespesa(index);
        row.insertCell(4).appendChild(btnExcluir);
    });
}

// Função para excluir uma despesa
function excluirDespesa(index) {
    let despesas = JSON.parse(localStorage.getItem('despesas')) || [];
    despesas.splice(index, 1);
    localStorage.setItem('despesas', JSON.stringify(despesas));
    exibirDespesas();
}

// Função para limpar o formulário
function limparFormulario() {
    document.getElementById('descricao').value = '';
    document.getElementById('valor').value = '';
    document.getElementById('categoria').value = '';
    document.getElementById('data').value = '';
}

// Inicializa a exibição das despesas ao carregar a página
window.onload = function() {
    exibirDespesas();
};