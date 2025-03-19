// src/index.ts
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.querySelector("#register-form");
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");
  const nameInput = document.querySelector("#name");
  const registerBtn = document.querySelector("#register-btn");
  if (registerForm && usernameInput && passwordInput && nameInput && registerBtn) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
      const name = nameInput.value.trim();
      if (username && password && name) {
        console.log({ username, password, name });
        usernameInput.value = "";
        passwordInput.value = "";
        nameInput.value = "";
      } else {
        console.log("Please fill out all fields!");
      }
    });
  } else {
    console.error("Elementlar topilmadi, tekshirib chiqing.");
  }
});
