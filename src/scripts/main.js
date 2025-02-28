$(document).ready(function () {
  $(".livros button").click(function () {
    //constante do novo item no carrinho
    const novaLista = $('<li class="me-4 do-carrinho"></li>');
    const notificacao = $(
      '<p class="animate__animated animate__pulse" id="notificacaoCarrinho">novo item!</p>'
    );

    //constantes do livro
    const imagenLivro = $(this).parent().find("img").attr("src");
    const nomeLivro = $(this).parent().find("h3").text();
    const valorLivro = $(this).parent().find("p").text();

    //função para adicionar as contantes do livro à constante do novo elemento no carrinho
    $(` 
        <div class="container animate__animated animate__fadeIn">
            <img src="${imagenLivro}" alt="">
            <h4>${nomeLivro}</h4>
            <strong>${valorLivro}</strong>
            </div>
        <button type="button" class="btn btn-outline-danger apagar animate__animated animate__fadeIn">Remover</button>
        `).appendTo(novaLista);

    //função q adiciona a constante do novo item ao html
    $(novaLista).appendTo("#carrinhoDeCompras");

    //função q analisa se há notificação de item novo
    if ($("#botaoCarrinho").has($("p"))) {
      $($("#notificacaoCarrinho")).remove();
      $(notificacao).appendTo("#botaoCarrinho");
    } else {
      $(notificacao).appendTo("#botaoCarrinho");
    }

    //botão de apagar
    $(".apagar").click(function () {
      $(this).parent().remove();
    });
  });

  //botão de apagar tudo
  $("#removeTdsItens").click(function () {
    $(".do-carrinho").remove();
  });

  //função para limpar notificação ao clicar
  $(".abrir-carrinho").click(function () {
    $($("#notificacaoCarrinho")).remove();
  });

  //máscaras e validações do formulário
  $("#telefone").mask("(00) 000000-0000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      mensagem: {
        required: true,
      },
    },
    submitHandler: function (form) {
      alert(
        "Sua requisição foi enviada para análise, parabéns pela aquisição!"
      );
      form.reset();
    },
    invalidHandler: function (form, validator) {
      alert("Por favor, preencha os campos para prosseguir com o atendimento!");
    },
  });
});
