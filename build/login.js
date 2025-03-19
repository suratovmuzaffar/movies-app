// src/login.ts
var params = new URLSearchParams(window.location.search);
var people = [];
people.push({
  username: params.get("reg-username"),
  email: params.get("reg-email"),
  password: params.get("reg-password")
});
console.log(people);
