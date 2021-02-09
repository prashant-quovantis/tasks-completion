// function validatePassword(event) {
//     event.preventDefault()
//     var emailValid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z])$/;
//     console.log(emailValid);
// }


function validatePassword(event) {
    event.preventDefault()
    var username = document.getElementById('username').value;
    var emailValid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var passwordValue = document.getElementById('password').value;
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/;
    if (!emailValid.test(username)) {
        alert('Enter a valid email Id');
        return false;
    }
    if (passwordValue.length < 8) {
        alert('Password must of 8 cahracters');
        return false;
    }
    if (!regularExpression.test(passwordValue)) {
        alert("Password should contain atleast one number, special character and one uppercase letter");
        return false;
    }
    if (passwordValue.search(/[A-Z]/) < 1) {
        alert("Your password needs an uppser case letter")
        return false;
    }
}