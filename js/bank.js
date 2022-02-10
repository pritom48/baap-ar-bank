document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email)

    // get user password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(password);

    // check email password
    if (email == 'pritomdas@gmail.com' && password == 'ami jani na') {
        window.location.href = "banking.html"
    }
})