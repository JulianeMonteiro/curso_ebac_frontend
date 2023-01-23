$(document).ready(function () {
  $("#tel").mask("(00) 00000-0000");
  $("#cep").mask("00.000-000");
  $("#cpf").mask("000.000.000-00");

  $("#name").on("keypress", function () {
    $(this).val(
      $(this)
        .val()
        .replace(/[0-9]+/g, "")
    );
  });

  $("#endereco").on("keypress", function () {
    $(this).val(
      $(this)
        .val()
        .replace(/[0-9]+/g, "")
    );
  });

  $("form").validate({
    rules: {
      name: { required: true, minlength: 8 },

      email: {
        required: true,
        email: true,
      },

      tel: {
        required: true,
        minlength: 14,
        maxlength: 15,
      },

      cpf: {
        required: true,
        minlength: 14,
        maxlength: 14,
      },

      cep: {
        required: true,
        minlength: 10,
        maxlength: 10,
      },
      endereco: {
        required: true,

        minlength: 10,
        maxlength: 40,
      },
      numero: {
        required: true,
        maxlength: 15,
      },
    },
    messages: {
      name: {
        required: "Por favor, insira o seu nome.",
        minlength: jQuery.validator.format(
          "Por favor, insira seu nome completo!"
        ),
      },
      tel: "Por favor, insira o seu telefone.",
      email: "Por favor, insira o seu -mail no formato 'nome@domínio.com'.",
      cpf: "Por favor, insira seu CPF.",
      cep: "Por favor, insira seu CEP.",
      endereco: {
        required: "Por favor, insira o seu endereço.",
        minlength: jQuery.validator.format(
          "Por favor, insira o seu endereço completo!"
        ),
        maxlength: jQuery.validator.format("Máximo 30 caracteres!"),
      },
      numero: "Por favor, insira o número da residência.",
    },
    submitHandler: function (form) {
      form.submit();
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();

      alert(`Existem ${camposIncorretos} campos incorretos`);
    },
  });
});
