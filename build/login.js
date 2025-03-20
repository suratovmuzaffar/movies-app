// src/login.ts
var params = new URLSearchParams(window.location.search);
var regpeople = JSON.parse(localStorage.getItem("regpeople") || "[]");
regpeople.push({
  username: params.get("reg-username"),
  email: params.get("reg-email"),
  password: params.get("reg-password")
});
console.log(regpeople);
localStorage.setItem("regpeople", JSON.stringify(regpeople));
var logpeople = {
  email: params.get("log-email"),
  password: params.get("log-password")
};
console.log(logpeople);
for (let i = 0;i < regpeople.length; i++) {
  if (regpeople[i].email === logpeople.email && regpeople[i].password === logpeople.password) {
    document.querySelector("#login-form")?.setAttribute("action", "./index.html");
  }
}
