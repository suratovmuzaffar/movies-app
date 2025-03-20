const params = new URLSearchParams(window.location.search);

// type yani obyect uchun ishlatish uchun type
interface User {
  username: string;
  email: string;
  password: string;
}

// registerdan olingan qiymatlar
const regUsername: string | null = params.get("reg-username");
const regEmail: string | null = params.get("reg-email");
const regPassword: string | null = params.get("reg-password");

// local storega malumotlarni local arrayga kochirib olish
let localarray = [];
localarray = JSON.parse(localStorage.getItem("regpeople") || "[]");

// agar qiymatlar bosh bolmasa obyectga saqlaymiz
if (regUsername && regEmail && regPassword) {
  const newUser: User = {
    username: regUsername,
    email: regEmail,
    password: regPassword,
  };
  // foydalanuvchi malumot jonatganda uni localstorega jonatamiz

  localarray.push(newUser);
  localStorage.setItem("regpeople", JSON.stringify(localarray));
}
// localarrayni yangilab olish
localarray = JSON.parse(localStorage.getItem("regpeople") || "[]");
console.log(localarray);
// login dan kiritilgan malumotlarni qabul qilish
const logEmail: string | null = params.get("log-email");
const logPassword: string | null = params.get("log-password");

//log emeil bor yoqligini tekshiramiz
if (logEmail && logPassword) {
  //local arraydan qidiramiz belgilangan emeil parolni agar topilsa qiymat yani true topilmasa underfined qaytadi va false boladi va userga saqlanadi
  let user: User | undefined = localarray.find(
    (u: User) => u.email === logEmail && u.password === logPassword
  );
  // userga qaraladi agar true bolsa formga yol korsatiladi va qaytadan ishlaydi codelar chunki login malumotlari yuklanmagan boladi
  if (user) {
    document
      .querySelector<HTMLFormElement>("#login-form")
      ?.setAttribute("action", "./movies.html");
    const loginemail: HTMLFormElement = document.querySelector("#email")!; // Elementni olish
    loginemail.value = `${logEmail}`;
    const loginpassword: HTMLFormElement = document.querySelector("#password")!; // Elementni olish
    loginpassword.value = `${logPassword}`;
    const loginbtn: HTMLFormElement = document.querySelector("#login-btn")!;
    loginbtn.click();
  }
  //agar notogri bolsa alert chiqadi
  else {
    window.alert("Login failed: User not found");
  }
}
