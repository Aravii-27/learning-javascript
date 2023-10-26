const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

form.addEventListener('submit', (e) => {

    if (!validateInputs()) {
        e.preventDefault();
    }

});

function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    if (usernameVal === '') {
        setError(username, 'user name is requierd');
    } else {
        setSucces(username);
    }

    if (emailVal === '') {
        setError(email, 'email is requierd');
    } else if (!validateEmail(emailVal)) {
        setError(email, 'please enter valid email');
    } else {
        setSucces(email);
    }

    if (passwordVal === '') {
        setError(password, 'password is requierd');
    } else if (passwordVal.length<8) {
        setError(password, 'password must be 8 characters');
    } else {
        setSucces(password);
    }

    if (cpasswordVal === '') {
        setError(cpassword, 'cpassword is requierd');
    } else if (cpasswordVal !== passwordVal) {
        setError(cpassword, 'cpassword mismatch to password');
    } else {
        setSucces(cpassword);
    }
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const ErrorElement = inputGroup.querySelector('.error');

    ErrorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('succes');

}

function setSucces(element) {
    const inputGroup = element.parentElement;
    const ErrorElement = inputGroup.querySelector('.error');

    ErrorElement.innerText = '';
    inputGroup.classList.add('succes');
    inputGroup.classList.remove('error');

}

const validateEmail = (email) => {
    return String(email)
        .toLocaleLowerCase()
        .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};