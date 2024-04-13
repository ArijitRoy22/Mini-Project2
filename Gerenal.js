// Attach event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    var loginLink = document.querySelector('.login-link');
    
    if(loginLink){
        loginLink.addEventListener('click', function() {
            window.location.href = 'SignIn.html';
            // window.open('SignIn.html', '_blank');
        });
    }
});

// Attach another event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    var SignUpLink = document.querySelector('.SignUp-link');

    if(SignUpLink){
        SignUpLink.addEventListener('click', function(){
            window.location.href = 'SignUp.html';
        });
    }
});

