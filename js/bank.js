document.getElementById('submit-button').addEventListener('click', function () {
    //get user Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //get validation
    if (userEmail == 'sontan@baap.com' && userPassword == '1234') {
        window.location.href = "banking.html";
    }
})