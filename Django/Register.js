// async function register(event){

//     const submit = document.querySelector('.signup');

//     submit.addEventListener('click', (e) => {
//         e.preventDefault();
//         const username = document.querySelector('#username').value;
//         const email = document.querySelector('#email').value;
//         const password = document.querySelector('#password').value;
//         const password2 = document.querySelector('#confirm-password').value;
//         const checkBox = document.getElementById('agreeCheckbox').checked;

//         // Remove existing error messages
//         document.querySelectorAll('.error-message').forEach(el => el.remove());

//         let errorMessage = "";
//         let hasError = false;

//         if (!username) {
//             errorMessage += "<div class='error-message'>User cannot be empty</div>";
//             hasError = true;
//         }

//         if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
//             errorMessage += "<div class='error-message'>Please enter a valid email address.</div>";
//             hasError = true;
//         }

//         if (!password || password.length < 8) {
//             errorMessage += "<div class='error-message'>Password must be at least 8 characters long</div>";
//             hasError = true;
//         }

//         if (password !== password2) {
//             errorMessage += "<div class='error-message'>Passwords do not match</div>";
//             hasError = true;
//         }

//         if (!checkBox) {
//             errorMessage += "<div class='error-message'>Please select the check box</div>";
//             hasError = true;
//         }

//         // Display error messages
//         if (hasError) {
//             const formContainer = document.getElementById('form-container');
//             if (formContainer) {
//                 formContainer.insertAdjacentHTML('beforeend', errorMessage);
//             } else {
//                 console.error("Container element not found");
//             }
//             return; // Exit the function if there are errors
//         } 

//         try {
//             const emailExistsResponse = await fetch('http://127.0.0.1:8000/api/v1/register/', {
//                 method: 'GET'
//             });

//             if(!emailExistsResponse.ok){
//                 throw new Error('Failed to check emamil existence');
//             }

//             const emailExistsData = await emailExistsResponse.json();
//             const emailFound = emailExistsData.find(user => user.email == email);

//             if(emailFound){
//                 errorMessage = "<div class='error-message'>You are already a user. Please login instead of registering again.</div>";
//                 const formContainer = document.getElementById('form-container');
//                 if (formContainer) {
//                     formContainer.insertAdjacentHTML('beforeend', errorMessage);
//                 }
//             }

//             const response = await fetch(`http://127.0.0.1:8000/api/v1/register/`, {
//                 method: 'POST',
//                 headers: {'Content-Type': 'application/json'},
//                 body: JSON.stringify({username,email,password,password2})
//             });

//             if(!response.ok){
//                 const errorData = await response.json();

//                 if(errorData.error === 'Invaild email or password.'){
//                     console.log('Login failed: Invalid credentials');

//                     const formContainer = document.getElementById('form-container');
//                     if(formContainer){
//                         formContainer.insertAdjacentHTML('beforeend', "<div class='error-message'>Invalid email or password.</div>")
//                     }
//                     return;
//                 } else{
//                     console.error('Login Failed: ', errorData.error);

//                     const formContainer = document.getElementById('form-container');
//                     if (formContainer) {
//                         formContainer.insertAdjacentHTML('beforeend', "<div class='error-message'>Login failed. Please try again.</div>");
//                     }
//                     return; // Exit if other errors occurred
//                 }
//             } else {
//                 console.log('login success.');
//             }
//         } catch (error) {
//             console.error(error);
//             let errorMessage = "";

//             switch(error.message) {

//             }
//         }

//     })
// });


async function register(event) {
    event.preventDefault();

    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const password2 = document.querySelector('#confirm-password').value;
    const checkBox = document.getElementById('agreeCheckbox').checked;


    // document.querySelector('.error-message').forEach(element => element.remove());

    let errorMessage = "";


    if (!username) {
        errorMessage += "<div class='error-message'>User cannot be empty</div>";
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        errorMessage += "<div class='error-message'>Please enter a valid email address.</div>";
        
    }

    if (!password || password.length < 8) {
        errorMessage += "<div class='error-message'>Password must be at least 8 characters long</div>";
        
    }

    if (password !== password2) {
        errorMessage += "<div class='error-message'>Passwords do not match</div>";
        
    }

    if (!checkBox) {
        errorMessage += "<div class='error-message'>Please select the check box</div>";
    }

    if (errorMessage) {
        const formContainer = document.getElementById('form-container');
        if (formContainer) {
            formContainer.insertAdjacentHTML('beforeend', errorMessage);
        } else {
            console.error("Container element not found");
        }
        return; // Exit if there are validation errors
    }

    try {
        
        const emailExistsResponse = await fetch('http://127.0.0.1:8000/api/v1/register/', {
            method: 'GET' // Assuming your validation endpoint uses GET
        });

        if (!emailExistsResponse.ok) {
            throw new Error('Failed to check email existence');
        }

        const emailExistsData = await emailExistsResponse.json();
        const emailFound = emailExistsData.find(user => user.email === email);
        // console.log(emailExistsData.find(user => user.email === email))
        localStorage.setItem('check', emailFound)
        if (emailFound) {
            throw new Error("You are already a user. Please login instead of registering again.")
        }

        const response = await fetch('http://127.0.0.1:8000/api/v1/register/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username,email,password,password2})
        });

        if (!response.ok) {
            const errorData = await response.json();

            if (errorData.error === 'Invalid email or password.') {
                console.log('Login failed: Invalid credentials');
                // Display an error message to the user (optional)
                const formContainer = document.getElementById('form-container');
                if (formContainer) {
                    formContainer.insertAdjacentHTML('beforeend', "<div class='error-message'>Invalid email or password.</div>");
                }
                return; // Exit if login failed (prevents redirecting to "fetch.html")
            } else {
                // Handle other potential errors from the server
                console.error('Login failed:', errorData.error);
                // Display a generic error message to the user (optional)
                const formContainer = document.getElementById('form-container');
                if (formContainer) {
                    formContainer.insertAdjacentHTML('beforeend', "<div class='error-message'>Login failed. Please try again.</div>");
                }
                return; // Exit if other errors occurred
            }
        }else{
            const data = await response.json();
            localStorage.setItem('user_id',data.id);
            if(data != null){
                window.location.replace('index.html');
            }
        }

    } catch (error) {
        console.error(error);
        let errorMessage = "";

        switch (error.message) {
            case 'Failed to check email existence':
                errorMessage = "<div class='error-message'>An error occurred. Please try again.</div>";
                break;
            case 'Invalid Email or Password credentials.':
                errorMessage = "<div class='error-message'>Invalid Email or Password credentials.</div>"
                break;
            case 'You are already a user. Please login instead of registering again.':
                errorMessage = "<div class='error-message'>You are already a user. Please login instead of registering again.</div>"
                break;
            default:
                errorMessage = "<div class='error-message'>Login failed. Please try again.</div>";
        }

        const formContainer = document.getElementById('form-container');
        if (formContainer) {
            formContainer.insertAdjacentHTML('beforeend', errorMessage);
        }
    }
}

const signupForm = document.getElementById('signin-form');
signupForm.addEventListener('submit',register);