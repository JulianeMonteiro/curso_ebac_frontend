const form = document.getElementById("form-validacao");
const numeroA = document.getElementById("numero-a");
const numeroB = document.getElementById("numero-b");
let formEValido = false;

function validaNumero(a, b) {
  const numA = a;
  const numB = b;
  let validacao;
  if (numA > numB) {
    validacao = false;
  } else {
    validacao = true;
  }
  return validacao;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const mensagemSucesso = `Sucesso! O número A: <b>${numeroA.value}</b> é menor que o número B: <b>${numeroB.value}</b>`;

  formEValido = validaNumero(numeroA.value, numeroB.value);
  if (formEValido) {
    const containerMensagemSucesso = document.querySelector(".success-message");
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = "block";

    numeroA.value = "";
    numeroB.value = "";
  } else {
    numeroB.style.border = "1px solid red";
    document.querySelector(".error-message").style.display = "block";
  }
});

numeroB.addEventListener("keyup", function (e) {
  console.log(e.target.value);
  formEValido = validaNumero(e.target.value);

  if (!formEValido) {
    numeroB.classList.add("error");
    // nomeBeneficiario.style.border = "1px solid red";
    document.querySelector(".error-message").style.display = "block";
  } else {
    numeroB.classList.remove("error");
    //nomeBeneficiario.style.border = "";
    document.querySelector(".error-message").style.display = "none";
  }
});
