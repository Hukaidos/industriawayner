const formSignin = document.querySelector('#signin');
const formSignup = document.querySelector('#signup');
const btnColor = document.querySelector('.btnColor');
const btnSignin = document.getElementById('btnSignin');
const btnSignup = document.getElementById('btnSignup');

btnSignin.addEventListener('click', () => {
    formSignin.style.left = "25px";
    formSignup.style.left = "450px";
    btnColor.style.left = "0px";
});

btnSignup.addEventListener('click', () => {
    formSignin.style.left = "-450px";
    formSignup.style.left = "25px";
    btnColor.style.left = "110px";
});

formSignin.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = formSignin.querySelector('input[type="text"]').value;
    const password = formSignin.querySelector('input[type="password"]').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'dashboard.html';
    } else {
        alert("Usuário ou senha incorretos.");
    }
});

formSignup.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = formSignup.querySelector('input[type="text"]').value;
    const password = formSignup.querySelector('input[type="password"]').value;
    const nivel = formSignup.querySelector('input[name="opcao"]:checked').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password, nivel });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Cadastro realizado com sucesso! Agora você pode fazer login.");
    e.target.reset();
});
