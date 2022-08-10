const form = document.getElementById('formulario')

const email = document.getElementById("email")
const nameForm = document.getElementById("name")
const message = document.getElementById("message")
form.addEventListener("submit", (e) => {
    email.value = " "
    nameForm.value = " "
    message.value = " "
})