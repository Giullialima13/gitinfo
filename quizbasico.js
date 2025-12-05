let perguntas = [
  {
    pergunta: "O que é o Git?",
    op: [
      "Um editor de texto",
      "Um sistema de controle de versões",
      "Um banco de dados",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual comando inicia um repositório Git?",
    op: ["git start", "git begin", "git init"],
    correta: 2,
  },
  {
    pergunta: "Qual comando grava mudanças na área de staging?",
    op: ["git commit", "git save", "git push"],
    correta: 0,
  },
  {
    pergunta: "Qual comando envia commits para o repositório remoto?",
    op: ["git upload", "git push", "git send"],
    correta: 1,
  },
  {
    pergunta: "Qual comando mostra o estado atual dos arquivos?",
    op: ["git status", "git info", "git check"],
    correta: 0,
  },
];

let indice = 0;
let pontos = 0;

function carregarPergunta() {
  document.getElementById("pergunta").textContent = perguntas[indice].pergunta;

  document.getElementById("op1").textContent = perguntas[indice].op[0];
  document.getElementById("op2").textContent = perguntas[indice].op[1];
  document.getElementById("op3").textContent = perguntas[indice].op[2];

  document.getElementById("resultado").textContent = "";

  atualizarProgresso();
}

function responder(op) {
  if (op === perguntas[indice].correta) {
    pontos++;
    document.getElementById("resultado").textContent = "✔ Resposta correta!";
  } else {
    document.getElementById("resultado").textContent = "✘ Resposta errada!";
  }

  indice++;

  if (indice < perguntas.length) {
    setTimeout(carregarPergunta, 800);
  } else {
    finalizarQuiz();
  }

  document.getElementById("pontuacao").textContent = "Pontuação: " + pontos;
}

function finalizarQuiz() {
  document.getElementById("pergunta").textContent = "Fim do Quiz!";
  document.getElementById("resultado").textContent =
    "Pontuação final: " + pontos + "/" + perguntas.length;

  document.getElementById("op1").style.display = "none";
  document.getElementById("op2").style.display = "none";
  document.getElementById("op3").style.display = "none";

  // barra chega a 100%
  document.getElementById("progressBar").style.width = "100%";

  // exibe navegação final
  document.getElementById("navFinal").style.display = "flex";

  // exibe recomeçar
  document.getElementById("recomecar").style.display = "block";
}

function atualizarProgresso() {
  let progresso = (indice / perguntas.length) * 100;
  document.getElementById("progressBar").style.width = progresso + "%";
}

carregarPergunta();
