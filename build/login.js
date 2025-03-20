// src/login.ts
var params = new URLSearchParams(window.location.search);
var regUsername = params.get("reg-username");
var regEmail = params.get("reg-email");
var regPassword = params.get("reg-password");
var localarray = [];
localarray = JSON.parse(localStorage.getItem("regpeople") || "[]");
if (regUsername && regEmail && regPassword) {
  const newUser = {
    username: regUsername,
    email: regEmail,
    password: regPassword
  };
  localarray.push(newUser);
  localStorage.setItem("regpeople", JSON.stringify(localarray));
}
localarray = JSON.parse(localStorage.getItem("regpeople") || "[]");
console.log(localarray);
var logEmail = params.get("log-email");
var logPassword = params.get("log-password");
if (logEmail && logPassword) {
  let user = localarray.find((u) => u.email === logEmail && u.password === logPassword);
  if (user) {
    document.querySelector("#login-form")?.setAttribute("action", "./movies.html");
    const loginemail = document.querySelector("#email");
    loginemail.value = `${logEmail}`;
    const loginpassword = document.querySelector("#password");
    loginpassword.value = `${logPassword}`;
    const loginbtn = document.querySelector("#login-btn");
    loginbtn.click();
  } else {
    window.alert("Login failed: User not found");
  }
}
