document.addEventListener("DOMContentLoaded", function (event) {
  event.preventDefault();

  const nameElement = document.querySelector("#name");
  const usernameElement = document.querySelector("#username");
  const avatarElement = document.querySelector("#avatar");
  const reposElement = document.querySelector("#repos");
  const followersElement = document.querySelector("#followers");
  const followingElement = document.querySelector("#following");
  const linkElement = document.querySelector("#link");

  // URL da API do GitHub para obter informações do usuário
  // const url = `https://api.github.com/users/JulianeMonteiro`;
  fetch("https://api.github.com/users/JulianeMonteiro")
    // fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      nameElement.innerText = json.name;
      usernameElement.innerText = json.login;
      avatarElement.src = json.avatar_url;
      followingElement.innerText = json.following;
      followersElement.innerText = json.followers;
      repositories.innerText = json.public_repos;
      linkElement.href = json.html_url;
    })

    .catch(function (erro) {
      alert(
        "Ocorreu um erro ao buscar o endereço, tente novamente mais tarde."
      );
    })
    .finally(function () {
      console.log("finally");
    });
});
