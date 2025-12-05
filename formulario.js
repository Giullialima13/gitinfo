document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  nameInput.addEventListener("input", () => {
    const pattern = /^[A-Za-zÀ-ÿ\s]+$/;

    if (!pattern.test(nameInput.value)) {
      nameError.textContent = "O nome não pode conter números ou símbolos.";
      nameInput.style.borderColor = "red";
    } else {
      nameError.textContent = "";
      nameInput.style.borderColor = "#aaa";
    }
  });

  emailInput.addEventListener("input", () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
      emailError.textContent = "Digite um email válido.";
      emailInput.style.borderColor = "red";
    } else {
      emailError.textContent = "";
      emailInput.style.borderColor = "#aaa";
    }
  });

  messageInput.addEventListener("input", () => {
    if (messageInput.value.length < 10) {
      messageError.textContent =
        "A mensagem deve ter pelo menos 10 caracteres.";
      messageInput.style.borderColor = "red";
    } else {
      messageError.textContent = "";
      messageInput.style.borderColor = "#aaa";
    }
  });

  form.addEventListener("submit", (event) => {
    let isValid = true;

    if (nameError.textContent !== "" || nameInput.value.trim() === "") {
      isValid = false;
      nameError.textContent = "Digite um nome válido.";
    }

    if (emailError.textContent !== "" || emailInput.value.trim() === "") {
      isValid = false;
      emailError.textContent = "Digite um email válido.";
    }

    if (
      messageError.textContent !== "" ||
      messageInput.value.trim().length < 10
    ) {
      isValid = false;
      messageError.textContent = "Mensagem muito curta.";
    }

    if (!isValid) {
      event.preventDefault();
    } else {
      alert("Formulário enviado com sucesso!");
    }
  });
});
