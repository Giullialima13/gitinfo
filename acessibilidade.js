// Botão principal
const accessBtn = document.querySelector(".accessibility-btn");

if (accessBtn) {
  accessBtn.onclick = function () {
    const panel = document.querySelector(".accessibility-panel");
    if (!panel) return;

    panel.style.display = panel.style.display === "block" ? "none" : "block";
  };
}

function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}

function increaseFont() {
  document.body.style.fontSize =
    parseFloat(getComputedStyle(document.body).fontSize) + 2 + "px";
}

function decreaseFont() {
  document.body.style.fontSize =
    parseFloat(getComputedStyle(document.body).fontSize) - 2 + "px";
}

function resetAccessibility() {
  document.body.classList.remove("high-contrast");
  document.body.style.fontSize = "";
  alert("Definições de acessibilidade repostas.");
}
