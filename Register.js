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
        
                                window.location.replace("index.html");
                                // window.location.replace(`fetch.html?userId=${userId}&username=${username}`);
                            })
                            .catch(error => console.error(error));
                    }

                });

        }
    })
});