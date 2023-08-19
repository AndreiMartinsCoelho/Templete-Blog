const btn = document.querySelector("#moreBTN");
const btn2 = document.querySelector("#moreBTN2");
const btn3 = document.querySelector("#moreBTN3");
const btn4 = document.querySelector("#moreBTN4");
const btn5 = document.querySelector("#moreBTN5");
const btn6 = document.querySelector("#moreBTN6");
const cont = document.querySelector(".noticias");
const container = document.querySelector(".container");
const cont2 = document.querySelector(".header-card");
const bloqPost = document.querySelector("#blogPost");
const bloqPost2 = document.querySelector("#blogPost2");
const bloqPost3 = document.querySelector("#blogPost3");
const bloqPost4 = document.querySelector("#blogPost4");
const bloqPost5 = document.querySelector("#blogPost5");
const bloqPost6 = document.querySelector("#blogPost6");

btn.addEventListener("click", function () {
  bloqPost.style.display = "block";
  cont.style.display = "none";
  cont2.style.display = "none";
  fetch("https://api-rest-post-diegocandido.herokuapp.com/postagem/2")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".card-titleVer").innerHTML = data.title;
      document.querySelector(".card-textDtVer").innerHTML = data.description;
      document.querySelector(".card-nomeVer").innerHTML =
        "Postado por " + data.profileName;
      document.querySelector(".card-dateVer").innerHTML = "Em " + data.postDate;
      document.querySelector(".verIMG").src = "./image/citroen.jfif";
    });

  // Criação do botão
  var button = document.createElement("button");
  button.className = "btn btn-primary";
  button.id = "Voltar";
  button.textContent = "Voltar";
  document.getElementById("container").appendChild(button);
  // Evento do botão
  button.addEventListener("click", () => {
    window.location.reload();
    container.style.display = "none";
    cont.style.display = "block";
  });
});

btn2.addEventListener("click", function () {
  bloqPost2.style.display = "block";
  cont.style.display = "none";
  cont2.style.display = "none";
  fetch("https://api-rest-post-diegocandido.herokuapp.com/postagem/1")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".card-titleVer").innerHTML = data.title;
      document.querySelector(".card-textDtVer").innerHTML = data.description;
      document.querySelector(".card-nomeVer").innerHTML =
        "Postado por " + data.profileName;
      document.querySelector(".card-dateVer").innerHTML = "Em " + data.postDate;
      document.querySelector(".verIMG").src = "./image/apple.jfif";
    });

  // Criação do botão
  var button = document.createElement("button");
  button.className = "btn btn-primary";
  button.id = "Voltar";
  button.textContent = "Voltar";
  document.getElementById("container").appendChild(button);
  // Evento do botão
  button.addEventListener("click", () => {
    window.location.reload();
    container.style.display = "none";
    cont.style.display = "block";
  });
});

btn3.addEventListener("click", function () {
  bloqPost3.style.display = "block";
  cont.style.display = "none";
  cont2.style.display = "none";
  fetch("https://api-rest-post-diegocandido.herokuapp.com/postagem/0")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".card-titleVer").innerHTML = data.title;
      document.querySelector(".card-textDtVer").innerHTML = data.description;
      document.querySelector(".card-nomeVer").innerHTML =
        "Postado por " + data.profileName;
      document.querySelector(".card-dateVer").innerHTML = "Em " + data.postDate;
      document.querySelector(".verIMG").src = "./image/capa-google-news.jpg";
    });

  // Criação do botão
  var button = document.createElement("button");
  button.className = "btn btn-primary";
  button.id = "Voltar";
  button.textContent = "Voltar";
  document.getElementById("container").appendChild(button);
  // Evento do botão
  button.addEventListener("click", () => {
    window.location.reload();
    container.style.display = "none";
    cont.style.display = "block";
  });
});

btn4.addEventListener("click", function () {
  bloqPost4.style.display = "block";
  cont.style.display = "none";
  cont2.style.display = "none";
  fetch("https://api-rest-post-diegocandido.herokuapp.com/postagem/3")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".card-titleVer").innerHTML = data.title;
      document.querySelector(".card-textDtVer").innerHTML = data.description;
      document.querySelector(".card-nomeVer").innerHTML =
        "Postado por " + data.profileName;
      document.querySelector(".card-dateVer").innerHTML = "Em " + data.postDate;
      document.querySelector(".verIMG").src = "./image/SEGA.jpg";
    });

  // Criação do botão
  var button = document.createElement("button");
  button.className = "btn btn-primary";
  button.id = "Voltar";
  button.textContent = "Voltar";
  document.getElementById("container").appendChild(button);
  // Evento do botão
  button.addEventListener("click", () => {
    window.location.reload();
    container.style.display = "none";
    cont.style.display = "block";
  });
});

btn5.addEventListener("click", function () {
  bloqPost5.style.display = "block";
  cont.style.display = "none";
  cont2.style.display = "none";
  fetch("https://api-rest-post-diegocandido.herokuapp.com/postagem/4")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".card-titleVer").innerHTML = data.title;
      document.querySelector(".card-textDtVer").innerHTML = data.description;
      document.querySelector(".card-nomeVer").innerHTML =
        "Postado por " + data.profileName;
      document.querySelector(".card-dateVer").innerHTML = "Em " + data.postDate;
      const thumbImage = data.thumbImage;
      document.querySelector(".verIMG").src =
        "https://api-rest-post-diegocandido.herokuapp.com" + thumbImage;
    });

  // Criação do botão
  var button = document.createElement("button");
  button.className = "btn btn-primary";
  button.id = "Voltar";
  button.textContent = "Voltar";
  document.getElementById("container").appendChild(button);
  // Evento do botão
  button.addEventListener("click", () => {
    window.location.reload();
    container.style.display = "none";
    cont.style.display = "block";
  });
});

btn6.addEventListener("click", function () {
  bloqPost6.style.display = "block";
  cont.style.display = "none";
  cont2.style.display = "none";
  fetch("https://api-rest-post-diegocandido.herokuapp.com/postagem/5")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".card-titleVer").innerHTML = data.title;
      document.querySelector(".card-textDtVer").innerHTML = data.description;
      document.querySelector(".card-nomeVer").innerHTML =
        "Postado por " + data.profileName;
      document.querySelector(".card-dateVer").innerHTML = "Em " + data.postDate;
      document.querySelector(".verIMG").src = "./image/Metaverse-gaming.jpeg";
    });

  // Criação do botão
  var button = document.createElement("button");
  button.className = "btn btn-primary";
  button.id = "Voltar";
  button.textContent = "Voltar";
  document.getElementById("container").appendChild(button);
  // Evento do botão
  button.addEventListener("click", () => {
    window.location.reload();
    container.style.display = "none";
    cont.style.display = "block";
  });
});
