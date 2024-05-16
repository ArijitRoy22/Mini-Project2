// Attach event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    var loginLink = document.querySelector('.login-link');

    if (loginLink) {
        loginLink.addEventListener('click', function () {
            window.location.href = 'SignIn.html';
            // window.open('SignIn.html', '_blank');
        });
    }
});

// Attach another event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    var SignUpLink = document.querySelector('.SignUp-link');

    if (SignUpLink) {
        SignUpLink.addEventListener('click', function () {
            window.location.href = 'SignUp.html';
        });
    }
});


// Attach event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the current page URL
    var currentPage = window.location.pathname.split('/').pop();

    // Get the referrer (the page the user came from)
    var referrer = document.referrer.split('/').pop();

    // Get references to the HOME and STORE buttons
    var homeButton = document.querySelector('.section1');
    var storeButton = document.querySelector('.section2');
    var sellButton = document.querySelector('.section3');
    var saveButton = document.querySelector('.section4');
    var notButton = document.querySelector('.section5');
    var setButton = document.querySelector('.section6');
    // var sellImage = document.querySelector('.logo3');

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
            homeButton.querySelector(".home-img").src = "Resources/Home-White.png"
        }
        else if (currentPage === 'Store.html') {
            storeButton.style.backgroundColor = '#0094FF';
            storeButton.style.color = '#FFFFFF';
            storeButton.querySelector(".store-img").src = "Resources/Store-White.png"
        }
        else if (currentPage === 'Sell.html') {
            sellButton.style.backgroundColor = '#0094FF';
            sellButton.style.color = '#FFFFFF';
            sellButton.querySelector(".sell-img").src = "Resources/Sell-White.png"
        }
        else if (currentPage === 'saved.html') {
            saveButton.style.backgroundColor = '#0094FF';
            saveButton.style.color = '#FFFFFF';
            saveButton.querySelector(".saved-img").src = "Resources/Saved-White.png"
        }
        else if (currentPage === 'notification.html') {
            notButton.style.backgroundColor = '#0094FF';
            notButton.style.color = '#FFFFFF';
            notButton.querySelector(".not-img").src = "Resources/notification-white.png"
        }
        else if (currentPage === 'setting.html') {
            setButton.style.backgroundColor = '#0094FF';
            setButton.style.color = '#FFFFFF';
            setButton.querySelector(".set-img").src = "Resources/Settings-white.png"
        }

        // // Special case: if returning from store page to home page, set HOME button to blue
        // if (currentPage === 'index.html' && referrer === 'Store.html') {
        //     homeButton.style.backgroundColor = '#0094FF';
        // }
    }


    // Call the function to update button styles on page load
    updateButtonStyles();
});

document.addEventListener('DOMContentLoaded', function () {
    let slideImages = document.querySelectorAll('#card-view');
    // Access the next and prev buttons
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    // Access the indicators
    let dots = document.querySelectorAll('.dot');

    var counter = 0;

    // Code for next button
    next.addEventListener('click', slideNext);
    function slideNext() {
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        if (counter >= slideImages.length - 1) {
            counter = 0;
        }
        else {
            counter++;
        }
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
        indicators();
    }

    // Code for prev button
    prev.addEventListener('click', slidePrev);
    function slidePrev() {
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        if (counter == 0) {
            counter = slideImages.length - 1;
        }
        else {
            counter--;
        }
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
        indicators();
    }

    // Auto slideing
    // function autoSliding(){
    // 	deletInterval = setInterval(timer, 3000);
    // 	function timer(){
    // 		slideNext();
    // 		indicators();
    // 	}
    // }
    // autoSliding();

    // Stop auto sliding when mouse is over
    // const container = document.querySelector('.slide-container');
    // container.addEventListener('mouseover', function(){
    // 	clearInterval(deletInterval);
    // });

    // Resume sliding when mouse is out
    // container.addEventListener('mouseout', autoSliding);

    // Add and remove active class from the indicators
    function indicators() {
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }
        dots[counter].className += ' active';
    }

    // Add click event to the indicator
    // function switchImage(currentImage){
    // 	currentImage.classList.add('active');
    // 	var imageId = currentImage.getAttribute('attr');
    // 	if(imageId > counter){
    // 	slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    // 	counter = imageId;
    // 	slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    // 	}
    // 	else if(imageId == counter){
    // 		return;
    // 	}
    // 	else{
    // 	slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    // 	counter = imageId;
    // 	slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';	
    // 	}
    // 	indicators();
    // }


    // Define function for moving to the previous image when a dot is clicked
    function movePrev() {
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        if (counter == 0) {
            counter = slideImages.length - 1;
        } else {
            counter--;
        }
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
        indicators(); // Update active dot
    }

    // Define function for moving to the next image when a dot is clicked
    function moveNext() {
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        if (counter >= slideImages.length - 1) {
            counter = 0;
        } else {
            counter++;
        }
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
        indicators(); // Update active dot
    }

    // Retrieve dots elements
    // const dots = document.querySelectorAll('.dot');

    // Loop through each dot element and add click event listener
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            // Check if the clicked dot is before or after the current slide
            if (index < counter) {
                // If clicked dot is before the current slide, move to previous slides
                while (index < counter) {
                    movePrev();
                }
            } else if (index > counter) {
                // If clicked dot is after the current slide, move to next slides
                while (index > counter) {
                    moveNext();
                }
            }
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.Info-gain').addEventListener('click', function() {
        console.log("Hello")
        document.querySelector('.default-text').classList.add('hidden');
        document.querySelector('.new-text').classList.remove('hidden');
        document.querySelector('.profile-name').classList.add('hidden');
        document.querySelector('.back').classList.remove('hidden');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.back').addEventListener('click', function() {
        console.log("Hello")
        document.querySelector('.default-text').classList.remove('hidden');
        document.querySelector('.new-text').classList.add('hidden');
        document.querySelector('.profile-name').classList.remove('hidden');
        document.querySelector('.back').classList.add('hidden');
    });
});
