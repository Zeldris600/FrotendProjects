let loginEmail = document.getElementById("email");
let loginPassword = document.getElementById("password");
let submitForm = document.getElementById('submit');
const database = JSON.parse(localStorage.getItem('users'));

let inputEmail = ''
let inputPassword = ''


loginEmail.addEventListener('keyup', ((e) => {
  let email = e.target.value
  inputEmail = email
}))

loginPassword.addEventListener('keyup', ((e) => {
    let password = e.target.value
    inputPassword = password
  }))


  submitForm.addEventListener('submit', ((e) => {
    e.preventDefault()
    let userInfo = {
        email: inputEmail,
        password: inputPassword,
    }

    let isUser2 =database.find((user) => user.email === userInfo.email && user.password === userInfo.password)
    if (!isUser2) {
        alert('Wrong credentials')
        return
    }

    localStorage.setItem('me', JSON.stringify(isUser2))
    window.location.href = "../home.html"
  }))