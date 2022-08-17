let nameInp = document.getElementById('name');
let emailInp = document.getElementById('email');
let password = document.getElementById('password');
let button = document.getElementById('btn');
let form = document.getElementById('form');

//console.log(nameInp);
let users = []
let savedName = '';
let savedEmail = '';
let savedPassword = '';
function showButton(){
    if (savedName.length >= 3 && savedPassword.length >= 6) {
        button.disabled = false //else console.log('YO!');
       
    }
}

let user2 = localStorage.getItem('users')
if (user2 == null) {
    users = []
} else {
    users = JSON.parse(user2)
}

nameInp.addEventListener("keyup", ((e) =>{
    const name = e.target.value;
    if (name.length < 3) {
        nameInp.style.border = '1px solid red'
    }else {
        nameInp.style.border = '1px solid green'
         
    }
console.log(e.target.value);
savedName = name
showButton()
}))
emailInp.addEventListener("keyup", ((e) =>{
    const email = e.target.value;
    
    savedEmail = email
    showButton()
    
}))
password.addEventListener("keyup", ((e) =>{
    const pass = e.target.value;
    if (pass.length < 6) {
        password.style.border = '1px solid red'
    } else {
        password.style.border = '1px solid green';
        
    }
    savedPassword = pass
    showButton()
}))


form.addEventListener("submit", ((e)=>{
 e.preventDefault()

   let userInfo = {

    email: savedEmail,
    name:  savedName,
    password: savedPassword
   }

   const isUser = users.find((user)=> user.email === userInfo.email)
if (isUser) {
    return alert('Email already in use')
}
 users.push(userInfo)
  localStorage.setItem("users", JSON.stringify(users))
  nameInp.value = ''
  emailInp.value = ''
  password.value = ''
  window.location.href = "../login.html"
  //console.log(users);


}))




