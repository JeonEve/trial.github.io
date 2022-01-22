function emailValidation() {
    let emailInput = document.getElementById("email")
    let emailErrorMessage = document.getElementById("emailErrorMessage")
    let emailRule = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    !emailRule.test(emailInput.value) ? emailErrorMessage.innerHTML = "The email must be a vaild email" : emailErrorMessage.innerHTML = ''

    emailInput.value == '' ? emailErrorMessage.innerHTML = '' : emailErrorMessage
}

function passwordValidation() {
    let passwordInput = document.getElementById("password")
    let passwordErrorMessage = document.getElementById("passwordErrorMessage")
    let passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

    !passwordRule.test(passwordInput.value) ? passwordErrorMessage.innerHTML = "The password must have at least 1 number, 1 special character, and between 6-16 characters" : passwordErrorMessage.innerHTML = ''    

    passwordInput.value == '' ? passwordErrorMessage.innerHTML = '' : passwordErrorMessage
}