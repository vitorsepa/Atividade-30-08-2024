document.getElementById('botao').addEventListener('click', function() {
    var texto = document.getElementById('campoTexto').value;
    var mensagem = document.getElementById('mensagem');
    if (texto) {
        mensagem.textContent = 'Você digitou: ' + texto;
    } else {
        mensagem.textContent = 'Por favor, digite algo no campo de texto.';
    }
})