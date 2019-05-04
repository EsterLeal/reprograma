var mensagem = document.querySelector('.mensagem');

var botao = document.querySelector('.button');
botao.addEventListener('click', function(evento){
    evento.preventDefault();
    mensagem.textContent = 'Seu E-mail foi cadastrado com sucesso!! xD';

})
