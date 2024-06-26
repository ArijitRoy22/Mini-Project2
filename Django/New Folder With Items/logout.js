document.addEventListener('DOMContentLoaded', function () {
    const uploadButton = document.getElementById('uploadButton');
    const logoutButton = document.getElementById('logout');

    // Check if user is logged in (using localStorage)
    const isLoggedIn = localStorage.getItem('refresh_token') != null || localStorage.getItem('userData') === 'true';
    const user_id = localStorage.getItem('user_id')
    console.log(user_id)
    console.log(isLoggedIn);
    

    // Function to handle image upload
    function uploadImage(event) {
        event.preventDefault(); // Prevent default form submission

    //     // Check if user is logged in
        if (!isLoggedIn) {
            // User is not logged in, redirect to login page
            alert('You need to login to upload images.');
            window.location.replace('SignIn.html'); // Use window.location.href for redirection
            return; // Exit the function after redirection
        }

    //     // Check if any form field has a value
    //     const hasFormData = !!new FormData(document.getElementById("addItemForm")).entries().next().value;

    //     if (!hasFormData) {
    //         alert("Please enter item details before uploading.");
    //         return; // Exit the function after showing the alert
    //     }

    //     // User is logged in and form has data, proceed with image upload logic...
        console.log('Image uploaded successfully.'); // Replace with actual upload logic

    }

    // Function to handle logout
    function logout() {
        // Clear user data from localStorage
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('userData');
        // Redirect to login page
        window.location.replace('SignIn.html');
    }

    // Event listener for upload button
    uploadButton.addEventListener('click', uploadImage);

    // Event listener for logout button
    logoutButton.addEventListener('click', logout);
});
