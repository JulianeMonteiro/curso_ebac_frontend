$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });

  $("#botao-cancelar").click(function () {
    $("form").slideUp();
  });

  $("form").on("submit", function (e) {
    e.preventDefault();

    const novaTarefa = $("#nova-tarefa").val();
    const novoItem = $(`<li class='tarefa'></li>`);

    $(`<li>${novaTarefa}</li>`).appendTo(novoItem);
    $(novoItem).appendTo("ul");

    $("#nova-tarefa").val("");
  });

  $(".itens").on("click", "li", function () {
    $(this).addClass("tarefaRealizada");
  });
});
