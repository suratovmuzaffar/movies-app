const user = document.getElementById('username') as HTMLInputElement;
const  password = document.getElementById('password') as HTMLInputElement;
const  btnlogin = document.getElementById('login')!;

btnlogin?.addEventListener('click', ()=> {
    if(user.value==='admin' && password.value==='root123'){
        window.location.href='index.html';
    }
    if(user.value !== 'admin'){
        user.classList.add('bg-red-300');
         user.value='';
         
         setTimeout(() => {
            user.classList.remove('bg-red-300');
         }, 2000);
    }
    if(password.value!=='root123'){
        password.classList.add('bg-red-300');
         password.value='';
         setTimeout(() => {
            password.classList.remove('bg-red-300');
         }, 2000);
    }
})

