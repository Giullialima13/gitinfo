let perguntas = [
  {
    pergunta: "O que o comando 'git rebase' faz?",
    op: [
      "Remove commits",
      "Reaplica commits em outra base",
      "Cria tags automaticamente",
    ],
    correta: 1,
  },
  {
    pergunta: "O que 'git reset --hard' significa?",
    op: [
      "Mantém staging e limpa working dir",
      "Apaga commits e alterações locais",
      "Desfaz apenas o último commit",
    ],
    correta: 1,
  },
  {
    pergunta: "Para que serve 'git cherry-pick'?",
    op: [
      "Remover branches antigos",
      "Selecionar commits específicos de outro branch",
      "Comparar commits",
    ],
    correta: 1,
  },
  {
    pergunta: "O que é um 'detached HEAD'?",
    op: [
      "Erro de chave SSH",
      "HEAD apontando para um commit e não para um branch",
      "Sem remote configurado",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual comando cria um commit de correção sobre o último?",
    op: ["git redo", "git recommit", "git commit --amend"],
    correta: 2,
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

  document.getElementById("progressBar").style.width = "100%";

  document.getElementById("navFinal").style.display = "flex";
  document.getElementById("recomecar").style.display = "block";
}

function atualizarProgresso() {
  let progresso = (indice / perguntas.length) * 100;
  document.getElementById("progressBar").style.width = progresso + "%";
}

carregarPergunta();
