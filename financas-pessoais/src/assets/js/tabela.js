// Este arquivo contém a lógica para a tabela de lançamentos, incluindo a funcionalidade de filtrar, editar e excluir lançamentos individuais.

document.addEventListener('DOMContentLoaded', () => {
    const tabela = document.getElementById('tabela-lancamentos');
    const btnExcluir = document.querySelectorAll('.btn-excluir');
    
    // Função para filtrar lançamentos
    function filtrarLancamentos() {
        const inputFiltro = document.getElementById('filtro-lancamentos').value.toLowerCase();
        const linhas = tabela.getElementsByTagName('tr');

        for (let i = 1; i < linhas.length; i++) {
            const celula = linhas[i].getElementsByTagName('td')[1]; // Supondo que a descrição esteja na segunda coluna
            if (celula) {
                const textoCelula = celula.textContent || celula.innerText;
                linhas[i].style.display = textoCelula.toLowerCase().indexOf(inputFiltro) > -1 ? '' : 'none';
            }
        }
    }

    // Função para excluir um lançamento
    function excluirLancamento(event) {
        const linha = event.target.closest('tr');
        if (linha) {
            tabela.deleteRow(linha.rowIndex);
        }
    }

    // Adiciona eventos de clique para os botões de excluir
    btnExcluir.forEach(btn => {
        btn.addEventListener('click', excluirLancamento);
    });

    // Adiciona evento de input para o filtro
    document.getElementById('filtro-lancamentos').addEventListener('input', filtrarLancamentos);
});