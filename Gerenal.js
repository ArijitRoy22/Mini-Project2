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


// Attach event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the current page URL
    var currentPage = window.location.pathname.split('/').pop();
    
    // Get the referrer (the page the user came from)
    var referrer = document.referrer.split('/').pop();
    
    // Get references to the HOME and STORE buttons
    var homeButton = document.querySelector('.logo1a');
    var storeButton = document.querySelector('.logo2a');
    var sellButton = document.querySelector('.logo3a');
    var saveButton = document.querySelector('.logo4a');
    var notButton = document.querySelector('.logo5a');
    var setButton = document.querySelector('.logo6a');
    var sellImage = document.querySelector('.logo3');

    // Function to update button styles based on the current page
    function updateButtonStyles() {
        // Reset styles for all buttons
        homeButton.style.backgroundColor = '';
        storeButton.style.backgroundColor = '';
        sellButton.style.backgroundColor = '';
        saveButton.style.backgroundColor = '';
        notButton.style.backgroundColor = '';
        setButton.style.backgroundColor = '';
        
        // Check the current page and update button styles accordingly
        if (currentPage === 'index.html') {
            homeButton.style.backgroundColor = '#0094FF'; 
            homeButton.style.color = '#FFFFFF';
        }else if(currentPage === 'Sell.html'){
            sellButton.style.backgroundColor = '#0094FF';
            sellButton.style.color = '#FFFFFF';
            sellImage.classList.add('active');
        }else if (currentPage === 'Store.html') {
            storeButton.style.backgroundColor = '#0094FF'; 
            storeButton.style.color = '#FFFFFF';
        }else if(currentPage === 'saved.html'){
            saveButton.style.backgroundColor = '#0094FF';
            saveButton.style.color = '#FFFFFF';
        }else if(currentPage === 'notification.html'){
            notButton.style.backgroundColor = '#0094FF';
            notButton.style.color = '#FFFFFF';
        }else if(currentPage === 'setting.html'){
            setButton.style.backgroundColor = '#0094FF';
            setButton.style.color = '#FFFFFF';
        }

        // // Special case: if returning from store page to home page, set HOME button to blue
        // if (currentPage === 'index.html' && referrer === 'Store.html') {
        //     homeButton.style.backgroundColor = '#0094FF';
        // }
    }


    // Call the function to update button styles on page load
    updateButtonStyles();
});






