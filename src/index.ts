document.addEventListener("DOMContentLoaded", () => {
    // Elementlarga to'g'ri selektorlar bilan murojaat qilish
    const registerForm = document.querySelector("#register-form") as HTMLFormElement;
    const usernameInput = document.querySelector("#username") as HTMLInputElement;
    const passwordInput = document.querySelector("#password") as HTMLInputElement;
    const nameInput = document.querySelector("#name") as HTMLInputElement;
    const registerBtn = document.querySelector("#register-btn") as HTMLButtonElement;
  
    
    if (registerForm && usernameInput && passwordInput && nameInput && registerBtn) {
      
      registerForm.addEventListener("submit", (event) => {
        event.preventDefault(); 
  
        
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const name = nameInput.value.trim();
  
        
        if (username && password && name) {
          
          console.log({username, password, name})
          
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
  