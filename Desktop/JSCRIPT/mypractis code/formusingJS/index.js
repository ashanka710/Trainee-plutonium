const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const password2 = document.getElementById("password2");
form.addEventListener("submit", e => {
    e.preventDefault();
    checkinputs();
});

function checkinputs() {
    // get the values from the input
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim()
    const password2Value = password2.value;
    if (usernameValue === '') {
        //show error
        // add error in class
        setErrorFor(username, "user name is blank");
    } else {
        // add  sucess class
        setSuccessFor(username);
    }
    if (emailValue === '') {
        setErrorFor(email, 'Email can not be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }
    if (passwordValue === '') {
        setErrorFor(password, "passworld is blank");
    } else {
        // add  sucess class
        setSuccessFor(password);
    }
    if (password2Value === '') {
        setErrorFor(password2, "passworld2 is blank");
    } else if (password2Value !== password2Value) {
        setErrorFor(password2, "passworld2 dosenot not match")

    } else {
        // add  sucess class
        setSuccessFor(password2);
    }

}



function setErrorFor(input, message) {
    const formControl = input.parentElement; //form-controll
    const small = formControl.querySelector('small');
    // add the error message
    // add error class
    formControl.className = "form-control error";
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control sucess';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}