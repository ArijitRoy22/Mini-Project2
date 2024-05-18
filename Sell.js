// function displayFileName(input, textFieldId) {
//     const fileName = input.files[0].name;
//     const textField = document.getElementById(textFieldId);
//     textField.value = fileName;
// }


// async function Sell(event){

//     event.preventDefault();
//     const name =  document.getElementById('name').value;
//     const about = document.getElementById('about').value;
//     const start_bid = (document.getElementById('startBid').value);
//     const length = (document.getElementById('length').value);
//     const Age = (document.getElementById('age').value);
//     const weight = (document.getElementById('weight').value);
//     const image1 = document.getElementById('input1').value;
//     const image2 = document.getElementById('input2').value;
//     const image3 = document.getElementById('input3').value;
//     const image4 = document.getElementById('input4').value;
//     const user_id = 2;
//     console.log(name)
//     console.log(about)
//     console.log(typeof(start_bid))
//     console.log(length)
//     console.log(Age)
//     console.log(weight)
//     console.log(image1)

//     try{
//         const sellItem = await fetch('http://localhost:8000/api/v1/items/', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({name,about,start_bid,length,Age,weight,image1,image2,image3,image4,user_id})
//         });

//         if(!sellItem.ok){
//             const errorData = await sellItem.json();
//         }else{
//             console.log('success');
//         }


//     }catch(error){
//         console.error(error)
//     }


// }

// const confirmButton = document.getElementById('sell-form')
// confirmButton.addEventListener('submit', Sell)


// Function to display file name when a file is selected
function displayFileName(input, picId) {
    const fileName = input.files[0].name;
    document.getElementById(picId).value = fileName;
}

// Function to handle form submission
async function Sell(event) {
    event.preventDefault();  // Prevent the default form submission

    const isLoggedIn = localStorage.getItem('refresh_token') != null || localStorage.getItem('userData') === 'true';
    console.log(isLoggedIn)
    if (!isLoggedIn) {
        // User is not logged in, redirect to login page
        alert('You need to login to upload images.');
        return; // Exit the function after redirection
    }

    const form = document.getElementById('sell-form');
    const formData = new FormData(form);  // Create a FormData object with the form

    const user_id = localStorage.getItem('user_id')
    console.log(user_id)
    // Manually append the user_id
    formData.append('user_id', user_id);

    try {
        const response = await fetch('http://localhost:8000/api/v1/items/', {
            method: 'POST',
            body: formData  // Send the form data
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error:', errorData);
        } else {
            alert("Item Uploaded successfully.")
            form.reset();
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// Attach the event listener to the form
document.getElementById('sell-form').addEventListener('submit', Sell);
