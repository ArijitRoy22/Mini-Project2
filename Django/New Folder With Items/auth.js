// const submit = document.querySelector('.signup');
// // const errorMessage = document.getElementById('errorMessage');


// submit.addEventListener('click', (e) => {
//     e.preventDefault();
//     const username = document.querySelector('#username').value;
//     const email = document.querySelector('#email').value;
//     const password = document.querySelector('#password').value;
//     const password2 = document.querySelector('#confirm-password').value;
//     const checkBox = document.getElementById('agreeCheckbox').checked;

//     let errorMessage = ""
//     let hasError = false


//     if(!username){
//         errorMessage += "User cannot be empty";
//     }

//     if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
//         errorMessage += "Please enter a valid email address.";
//     }

//     if(!password || password.length < 8){
//         errorMessage += "Password must be at least 8 character long";
//     }

//     if(password != password2){
//         errorMessage += "Password does not match";
//     }

//     if(!email || !password || !username || !password2){
//         errorMessage += "Please fill all the details";
//     }

//     if(!checkBox){
//         errorMessage += "Please select the check box";
//     }


//     if (errorMessage) {
//         alert(errorMessage); // You can replace alert with a more user-friendly error display mechanism
//         return; // Exit the function if there are errors
//       }
//     else{
//     console.log("username: ",username)
//     console.log("email: ", email);
//     console.log("password: ", password);
//     console.log("password2: ", password2);
//     }

//     // function displayError(messages) {
//     //     const errorSpans = document.querySelectorAll('.error-message');
//     //     errorSpans.forEach((span, index) => {
//     //       span.textContent = messages[index] || ""; // Set error message or clear if no message at index
//     //     });
//     //   }
// })

document.addEventListener('DOMContentLoaded', function () {

    const submit = document.querySelector('.signup');

    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const username = document.querySelector('#username').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const password2 = document.querySelector('#confirm-password').value;
        const checkBox = document.getElementById('agreeCheckbox').checked;

        // Remove existing error messages
        document.querySelectorAll('.error-message').forEach(el => el.remove());

        let errorMessage = "";
        let hasError = false;

        if (!username) {
            errorMessage += "<div class='error-message'>User cannot be empty</div>";
            hasError = true;
        }

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            errorMessage += "<div class='error-message'>Please enter a valid email address.</div>";
            hasError = true;
        }

        if (!password || password.length < 8) {
            errorMessage += "<div class='error-message'>Password must be at least 8 characters long</div>";
            hasError = true;
        }

        if (password !== password2) {
            errorMessage += "<div class='error-message'>Passwords do not match</div>";
            hasError = true;
        }

        if (!checkBox) {
            errorMessage += "<div class='error-message'>Please select the check box</div>";
            hasError = true;
        }

        // Display error messages
        if (hasError) {
            const formContainer = document.getElementById('form-container');
            if (formContainer) {
                formContainer.insertAdjacentHTML('beforeend', errorMessage);
            } else {
                console.error("Container element not found");
            }
            return; // Exit the function if there are errors
        } else {
            // console.log("username: ", username);
            // console.log("email: ", email);
            // console.log("password: ", password);
            // console.log("password2: ", password2);
            fetch(`http://127.0.0.1:8000/api/v1/register/`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Network response was not ok');
                    }
                })
                .then(userData => {
                    // Check if any user already has the provided email
                    const userWithEmail = userData.find(user => user.email === email);
                    if (userWithEmail) {
                        errorMessage = "<div class='error-message'>You are already a user. Please login instead of registering again.</div>";
                        const formContainer = document.getElementById('form-container');
                        if (formContainer) {
                            formContainer.insertAdjacentHTML('beforeend', errorMessage);
                        }
                    }
                    
                    else {
                        fetch('http://127.0.0.1:8000/api/v1/register/', {
                            method: 'POST',
                            headers: {
                                accept: "application/json",
                                "Content-type": "application/json",
                            },
                            body: JSON.stringify(
                                {
                                    username: username,
                                    email: email,
                                    password: password,
                                    password2: password2
                                }
                            )
                        }).then(authResponse => {
                            console.log("authResponse: ", authResponse);
                            if (authResponse.status === 200) {
                                return authResponse.json();
                            }
                            else if (authResponse.status === 401) {
                                errorMessage.textcontent = "Unauthorised access";
                            }
                            else if (authResponse.status === 404) {
                                errorMessage.textcontent = "User not found";
                            }
                            else {
                                errorMessage.textcontent = `Error: ${authResponse.status}`;
                            }
                        })
                            .then(userData => {
                                // console.log("userData: ", userData);
                                // Check for success property

                                localStorage.setItem("userData", true);
        
                                window.location.replace("fetch.html");
                                // window.location.replace(`fetch.html?userId=${userId}&username=${username}`);
                            })
                            .catch(error => console.error(error));
                    }

                });

        }
    })
});


// document.addEventListener('DOMContentLoaded', function () {

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
//         } else {
//             // Fetch user details to check if email already exists
//             fetch(`http://127.0.0.1:8000/api/v1/register/`)
//                 .then(response => {
//                     if (response.ok) {
//                         return response.json();
//                     } else {
//                         throw new Error('Network response was not ok');
//                     }
//                 })
//                 .then(userData => {
//                     // Check if any user already has the provided email
//                     const userWithEmail = userData.find(user => user.email === email);
//                     if (userWithEmail) {
//                         errorMessage = "<div class='error-message'>You are already a user. Please login instead of registering again.</div>";
//                         const formContainer = document.getElementById('form-container');
//                         if (formContainer) {
//                             formContainer.insertAdjacentHTML('beforeend', errorMessage);
//                         }
//                     } else {
//                         // Proceed with registration
//                         fetch('http://127.0.0.1:8000/api/v1/register/', {
//                             method: 'POST',
//                             headers: {
//                                 accept: "application/json",
//                                 "Content-type": "application/json",
//                             },
//                             body: JSON.stringify(
//                                 {
//                                     username: username,
//                                     email: email,
//                                     password: password,
//                                     password2: password2
//                                 }
//                             )
//                         }).then(authResponse => {
//                             if (authResponse.status === 200) {
//                                 return authResponse.json();
//                             } else if (authResponse.status === 400) {
//                                 return authResponse.json().then(data => {
//                                     throw new Error(data.detail || "Registration failed.");
//                                 });
//                             } else {
//                                 throw new Error(`Error: ${authResponse.status}`);
//                             }
//                         })
//                             .then(userData => {
//                                 window.localStorage.setItem("userData", JSON.stringify(userData));
//                                 window.location.replace("fetch.html");
//                             })
//                             .catch(error => {
//                                 console.error(error);
//                                 errorMessage = `<div class='error-message'>${error.message}</div>`;
//                                 const formContainer = document.getElementById('form-container');
//                                 if (formContainer) {
//                                     formContainer.insertAdjacentHTML('beforeend', errorMessage);
//                                 }
//                             });
//                     }
//                 })
//                 .catch(error => {
//                     console.error('There has been a problem with your fetch operation:', error);
//                 });
//         }
//     });

// });


// document.addEventListener('DOMContentLoaded', function () {

//     const submit = document.querySelector('.signin');

//     submit.addEventListener('click', (e) => {
//         e.preventDefault();
//         const email = document.querySelector('#email').value;
//         const password = document.querySelector('#password').value;

//         // Remove existing error messages
//         document.querySelectorAll('.error-message').forEach(el => el.remove());

//         let errorMessage = "";
//         let hasError = false;

//         if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
//             errorMessage += "<div class='error-message'>Please enter a valid email address.</div>";
//             hasError = true;
//         }

//         if (!password || password.length < 8) {
//             errorMessage += "<div class='error-message'>Please enter a valid password.</div>";
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
//         } else {
//             // Proceed with login
//             fetch('http://127.0.0.1:8000/api/v1/login/', {
//                 method: 'POST',
//                 headers: {
//                     accept: "application/json",
//                     "Content-type": "application/json",
//                 },
//                 body: JSON.stringify(
//                     {
//                         email: email,
//                         password: password
//                     }
//                 )
//             }).then(response => {
//                 if (response.ok) {
//                     return response.json();
//                 } else if (response.status === 401) {
//                     throw new Error('Invalid email or password.');
//                 } else if (response.status === 404) {
//                     throw new Error('User not found. Please register first.');
//                 } else {
//                     throw new Error(`Error: ${response.status}`);
//                 }
//             })
//             .then(data => {
//                 // Successful login, handle tokens and redirect
//                 console.log(data);
//                 window.localStorage.setItem("userData", JSON.stringify(data));
//                 window.location.replace("fetch.html");
//             })
//             .catch(error => {
//                 console.error(error);
//                 errorMessage = `<div class='error-message'>${error.message}</div>`;
//                 const formContainer = document.getElementById('form-container');
//                 if (formContainer) {
//                     formContainer.insertAdjacentHTML('beforeend', errorMessage);
//                 }
//             });
//         }
//     });

// });
