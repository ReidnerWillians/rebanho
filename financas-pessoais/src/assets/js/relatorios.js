// Este arquivo contém a lógica para a geração de relatórios, permitindo a separação dos dados por contas e categorias, além de filtrar por períodos mensal ou anual.

document.addEventListener('DOMContentLoaded', function() {
    const relatorioContainer = document.getElementById('relatorio-container');
    const periodoSelect = document.getElementById('periodo-select');
    const categoriaSelect = document.getElementById('categoria-select');
    const gerarRelatorioBtn = document.getElementById('gerar-relatorio-btn');

    gerarRelatorioBtn.addEventListener('click', function() {
        const periodo = periodoSelect.value;
        const categoria = categoriaSelect.value;

        gerarRelatorio(periodo, categoria);
    });

    function gerarRelatorio(periodo, categoria) {
        // Lógica para filtrar e gerar o relatório com base no período e categoria selecionados
        // Aqui você pode adicionar a lógica para buscar os dados e formatá-los para exibição

        relatorioContainer.innerHTML = ''; // Limpa o container antes de gerar um novo relatório

        // Exemplo de dados fictícios
        const dadosRelatorio = [
            { data: '2023-01-01', categoria: 'Alimentação', valor: 200 },
            { data: '2023-01-15', categoria: 'Transporte', valor: 50 },
            { data: '2023-02-01', categoria: 'Alimentação', valor: 150 },
        ];

        // Filtrando os dados com base no período e categoria
        const dadosFiltrados = dadosRelatorio.filter(dado => {
            return (categoria === 'todas' || dado.categoria === categoria) &&
                   (periodo === 'mensal' ? dado.data.startsWith('2023-01') : dado.data.startsWith('2023'));
        });

        // Exibindo os dados filtrados
        dadosFiltrados.forEach(dado => {
            const div = document.createElement('div');
            div.textContent = `Data: ${dado.data}, Categoria: ${dado.categoria}, Valor: R$ ${dado.valor}`;
            relatorioContainer.appendChild(div);
        });
    }
});