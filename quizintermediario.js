let perguntas = [
  {
    pergunta: "O que o comando 'git clone' faz?",
    op: [
      "Cria um branch",
      "Copia um repositório remoto",
      "Deleta um repositório",
    ],
    correta: 1,
  },
  {
    pergunta: "Para que serve o comando 'git pull'?",
    op: [
      "Enviar commits para o remoto",
      "Baixar modificações e mesclar",
      "Resetar arquivos",
    ],
    correta: 1,
  },
  {
    pergunta: "O que o comando 'git branch nome' faz?",
    op: ["Cria um novo branch", "Renomeia arquivos", "Remove mudanças"],
    correta: 0,
  },
  {
    pergunta: "Qual comando combina branches?",
    op: ["git combine", "git join", "git merge"],
    correta: 2,
  },
  {
    pergunta: "Como ver todos os branches (locais e remotos)?",
    op: ["git list all", "git branch -a", "git see remote"],
    correta: 1,
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
