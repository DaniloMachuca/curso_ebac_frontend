const form = document.getElementById('formulario');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numA = document.getElementById('campoA');
    const numB = document.getElementById('campoB');
    const containerMensagemSucesso = document.querySelector('.success-message');
    const mensagemSucesso = `O número ${numB.value} é maior que o número ${numA.value}`;
    const mensagemFracaco = `O número ${numB.value} é menor que o número ${numA.value}`;

    if(numA.value > numB.value) {
        document.querySelector('.message').innerHTML = mensagemFracaco;
        containerMensagemSucesso.style.backgroundColor = 'red';
        containerMensagemSucesso.innerHTML = `FORMULÁRIO INVÁLIDO`;
        containerMensagemSucesso.style.display = 'block';
    } else {
        document.querySelector('.message').innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.backgroundColor = 'green';
        containerMensagemSucesso.innerHTML = `FORMULÁRIO VÁLIDO`;
        containerMensagemSucesso.style.display = 'block';
    }

    console.log(document.querySelector('.success-message'))
})



