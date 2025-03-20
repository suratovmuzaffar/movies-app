const params = new URLSearchParams(window.location.search);

// Foydalanuvchi interfeysi
interface User {
  username: string;
  email: string;
  password: string;
}

// Ro‘yxatdan o‘tish ma’lumotlarini olish
const regUsername: string | null = params.get("reg-username");
const regEmail: string | null = params.get("reg-email");
const regPassword: string | null = params.get("reg-password");

//
let localarray = [];
localarray = JSON.parse(localStorage.getItem("regpeople") || "[]");

// Agar foydalanuvchi ro‘yxatdan o‘tsa, uni saqlaymiz
if (regUsername && regEmail && regPassword) {
  const newUser: User = {
    username: regUsername,
    email: regEmail,
    password: regPassword,
  };
  // Yangi foydalanuvchini massivga qo‘shish va LocalStorage'ga yozish

  localarray.push(newUser);
  localStorage.setItem("regpeople", JSON.stringify(localarray));
}
// LocalStorage'dan foydalanuvchilarni olish
const storedUsers: User[] = JSON.parse(
  localStorage.getItem("regpeople") || "[]"
);
console.log("Registered Users:", localarray);

// Kirish (login) ma'lumotlarini olish
const logEmail: string | null = params.get("log-email");
const logPassword: string | null = params.get("log-password");

// Agar login ma'lumotlari mavjud bo‘lsa, foydalanuvchini tekshiramiz
if (logEmail && logPassword) {
  let user: User | undefined = storedUsers.find(
    (u) => u.email === logEmail && u.password === logPassword
  );

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
  } else {
    console.log("Login failed: User not found");
  }
}
