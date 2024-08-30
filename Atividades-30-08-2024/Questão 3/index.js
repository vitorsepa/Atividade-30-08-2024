document.addEventListener('DOMContentLoaded', carregarTarefas);
document.getElementById('adicionarTarefa').addEventListener('click', adicionarTarefa);

function adicionarTarefa() {
    var tarefaTexto = document.getElementById('novaTarefa').value;
    if (tarefaTexto === '') {
        alert('Por favor, digite uma tarefa.');
        return;
    }

    var li = document.createElement('li');
    li.textContent = tarefaTexto;

    var botoes = document.createElement('div');
    botoes.className = 'buttons';

    var botaoConcluir = document.createElement('button');
    botaoConcluir.textContent = 'Concluir';
    botaoConcluir.addEventListener('click', function() {
        li.classList.toggle('completed');
        salvarTarefas();
    });

    var botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.addEventListener('click', function() {
        li.remove();
        salvarTarefas();
    });

    botoes.appendChild(botaoConcluir);
    botoes.appendChild(botaoExcluir);
    li.appendChild(botoes);

    document.getElementById('listaTarefas').appendChild(li);
    document.getElementById('novaTarefa').value = '';

    salvarTarefas();
}

function salvarTarefas() {
    var tarefas = [];
    document.querySelectorAll('#listaTarefas li').forEach(function(li) {
        tarefas.push({
            texto: li.firstChild.textContent,
            concluida: li.classList.contains('completed')
        });
    });
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function carregarTarefas() {
    var tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.forEach(function(tarefa) {
        var li = document.createElement('li');
        li.textContent = tarefa.texto;
        if (tarefa.concluida) {
            li.classList.add('completed');
        }

        var botoes = document.createElement('div');
        botoes.className = 'buttons';

        var botaoConcluir = document.createElement('button');
        botaoConcluir.textContent = 'Concluir';
        botaoConcluir.addEventListener('click', function() {
            li.classList.toggle('completed');
            salvarTarefas();
        });

        var botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.addEventListener('click', function() {
            li.remove();
            salvarTarefas();
        });

        botoes.appendChild(botaoConcluir);
        botoes.appendChild(botaoExcluir);
        li.appendChild(botoes);

        document.getElementById('listaTarefas').appendChild(li);
    });
}