// //event listener for shipping.html
// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('sell-form');
//     const submitButton = document.getElementById('next');

//     submitButton.addEventListener('click', function (event) {
//         event.preventDefault(); // Prevent default form submission

//         if (validateForm()) {
//             // If all fields are valid, redirect to payment.html
//             window.location.href = 'payment.html';
//         } else {
//             alert('Please fill out all required fields.');
//         }
//     });

//     function validateForm() {
//         const requiredFields = document.querySelectorAll('input[required]');
//         let isValid = true;

//         requiredFields.forEach(field => {
//             if (!field.value.trim()) {
//                 isValid = false;
//                 field.style.borderColor = 'red'; // Highlight the empty field
//             } else {
//                 field.style.borderColor = ''; // Remove highlight
//             }
//         });

//         return isValid;
//     }
// });

// //event listener for payment.html
// document.addEventListener('DOMContentLoaded', function () {
//     const submitButton1 = document.getElementById('next1');

//     submitButton1.addEventListener('click', function (event) {
//         event.preventDefault();
//         window.location.href = 'display.html';
//     });
// });

// //event listener for display.html
// document.addEventListener('DOMContentLoaded', function () {
//     const submitButton2 = document.getElementById('next2');

//     submitButton2.addEventListener('click', function (event) {
//         event.preventDefault();
//         window.location.href = 'Store.html';
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    // Event listener for delivery.html
    const submitButton = document.getElementById('next');
    const form = document.getElementById('sell-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        let allFieldsFilled = true;

        formData.forEach(function (value) {
            if (!value) {
                allFieldsFilled = false;
            }
        });

        if (allFieldsFilled) {
            window.location.href = 'payment.html';
        } else {
            alert("Please fill in all the details.");
        }
    });

    // Event listener for payment.html
    const submitButton1 = document.getElementById('next1');

    if (submitButton1) {
        submitButton1.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default button action

            // Assume you have radio groups with class name 'radio-group'
            const radioGroups = document.querySelectorAll('.radio-group');
            let allGroupsFilled = true;

            radioGroups.forEach(function (group) {
                const selected = group.querySelector('input[type="radio"]:checked');
                if (!selected) {
                    allGroupsFilled = false;
                }
            });

            if (allGroupsFilled) {
                // Redirect if all radio groups are filled
                window.location.href = 'display.html';
            } else {
                alert("Please select an option for each category.");
            }
        });
    }
    // Event listener for display.html
    const submitButton2 = document.getElementById('next2');

    if (submitButton2) {
        submitButton2.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = 'Store.html';
        });
    }
});
