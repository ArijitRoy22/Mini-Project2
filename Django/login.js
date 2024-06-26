async function login(event) {
    event.preventDefault(); // Prevent default form submission

    // Extract email and password from form elements
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Clear any existing error messages (optional)
    document.querySelectorAll('.error-message').forEach(el => el.remove());

    // Validation (optional)
    let errorMessage = "";
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        errorMessage += "<div class='error-message'>Please enter a valid email address.</div>";
    }
    if (!password || password.length < 8) {
        errorMessage += "<div class='error-message'>Please enter a valid password.</div>";
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

    // 

    try {
        // Check if email exists before login attempt
        const emailExistsResponse = await fetch('http://127.0.0.1:8000/api/v1/register/', {
            method: 'GET' // Assuming your validation endpoint uses GET
        });

        if (!emailExistsResponse.ok) {
            throw new Error('Failed to check email existence');
        }

        const emailExistsData = await emailExistsResponse.json();
        const emailFound = emailExistsData.find(user => user.email === email);

        if (!emailFound) {
            throw new Error('Email not found. Please register first.');
        }

        localStorage.setItem('user_id',emailFound.id)
        localStorage.setItem('user_name',emailFound.username)

        // If email exists, proceed with login attempt (rest of the code remains the same)
        // ...

        const response = await fetch('http://127.0.0.1:8000/api/v1/login/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
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
        } else {

            const data = await response.json();
            localStorage.setItem('refresh_token', data.refresh);
            localStorage.setItem('access_token', data.access);

            // Redirect to "fetch.html" after successful login
            
            if (data.refresh != null) {
                window.location.replace("index.html");
            }else{
                throw new Error("Invalid Email or Password credentials.")
            }
        }

    } catch (error) {
        console.error(error);
        let errorMessage = "";

        switch (error.message) {
            case 'Failed to check email existence':
                errorMessage = "<div class='error-message'>An error occurred. Please try again.</div>";
                break;
            case 'Email not found. Please register first.':
                errorMessage = "<div class='error-message'>Email not found. Please register first.</div>";
                break;
            case 'Invalid Email or Password credentials.':
                errorMessage = "<div class='error-message'>Invalid Email or Password credentials.</div>"
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

// Assuming you have a form with an ID of "login-form" and submit button
const loginForm = document.getElementById('signin-form');
loginForm.addEventListener('submit', login);
