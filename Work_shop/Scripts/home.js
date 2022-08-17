let name2 = document.getElementById('name');
let email = document.getElementById('email');
let data = JSON.parse(localStorage.getItem('me')) 

name2.innerHTML = `Welcome back  ${data.name}`
email.innerHTML = `Email:  ${data.email}`
