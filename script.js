const cards = document.querySelectorAll(".card-personagem");
const detalhes = document.getElementById("detalhesPersonagens");

const botaoGanharV = document.getElementById("ganhar-v");
const botaoPerderV = document.getElementById("perder-v");
const valorV = document.getElementById("v-valor");
const statusV = document.getElementById("v-status");

let compostoV = 0;

function atualizarStatus() {
  if (compostoV === 0) {
    statusV.textContent = "Status: Humano comum.";
  } else if (compostoV <= 100) {
    statusV.textContent = "Status: Sentindo algo estranho...";
  } else if (compostoV <= 400) {
    statusV.textContent = "Status: Poderes instáveis.";
  } else if (compostoV <= 600) {
    statusV.textContent = "Status: Supe em treinamento.";
  } else if (compostoV <= 1000) {
    statusV.textContent = "Status: Membro dos Sete?";
  } else {
    statusV.textContent = "Status: Morto pelo Homelander.";
  }
}

botaoGanharV.addEventListener("click", function () {
  compostoV += 10;
  valorV.textContent = compostoV;
  atualizarStatus();
});

botaoPerderV.addEventListener("click", function () {
  compostoV -= 5;

  if (compostoV < 0) {
    compostoV = 0;
  }

  valorV.textContent = compostoV;
  atualizarStatus();
});

cards.forEach(function(card) {
  card.addEventListener("click", function() {
    const nome = card.dataset.nome;
    const imagem = card.dataset.imagem;
    const descricao = card.dataset.descricao;

    cards.forEach(function(item) {
      item.classList.remove("ativo");
    });

    card.classList.add("ativo");

    detalhes.innerHTML = `
      <h3>${nome}</h3>
      <img src="${imagem}" alt="${nome}">
      <p>${descricao}</p>
    `;
  });
});

const botaoResultado = document.getElementById("btn-resultado");
const resultadoQuiz = document.getElementById("resultado-quiz");

botaoResultado.addEventListener("click", function() {
  const resposta1 = document.querySelector('input[name="q1"]:checked');
  const resposta2 = document.querySelector('input[name="q2"]:checked');
  const resposta3 = document.querySelector('input[name="q3"]:checked');

  if (!resposta1 || !resposta2 || !resposta3) {
    resultadoQuiz.innerHTML = "<p>Responda todas as perguntas antes de ver o resultado.</p>";
    return;
  }

  let pontos = 0;

  if (resposta1.value === "b") {
    pontos++;
  }

  if (resposta2.value === "a") {
    pontos++;
  }

  if (resposta3.value === "c") {
    pontos++;
  }

  let mensagem = "";

  if (pontos === 3) {
    mensagem = "It was... Perfect. (3 pontos)";
  } else if (pontos === 2) {
    mensagem = "Congratulations...! Not really. (2 pontos)";
  } else if (pontos === 1) {
    mensagem = "Is that the best you can do? (1 ponto)";
  } else {
    mensagem = "You're disgusting. (0 pontos)";
  }

  resultadoQuiz.innerHTML = `
    <p>Você acertou ${pontos} de 3 perguntas!</p>
    <p>${mensagem}</p>
  `;
});

const botaoTema = document.getElementById("toggle-tema");

botaoTema.addEventListener("click", function() {
  document.body.classList.toggle("tema-claro");

  const botaoGanharV = document.getElementById("ganhar-v");
const botaoPerderV = document.getElementById("perder-v");
const valorV = document.getElementById("v-valor");
const statusV = document.getElementById("v-status");

let compostoV = 0;

botaoGanharV.addEventListener("click", function() {
  compostoV += 10;
  valorV.textContent = compostoV;
  atualizarStatus();
});

botaoPerderV.addEventListener("click", function() {
  compostoV -= 5;

  if (compostoV < 0) {
    compostoV = 0;
  }

  valorV.textContent = compostoV;
  atualizarStatus();
});
});