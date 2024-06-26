// document.addEventListener('DOMContentLoaded', function() {
//     const item = JSON.parse(localStorage.getItem('item'));
//     if (item) {
//         console.log('Displaying Item:', item); // Debugging: Log the item details

//         // Ensure the image URL is not null and is correctly formed
//         const fullImageUrl = item.image1 ? item.image1 : '';
//         let imageUrl = '';

//         if (fullImageUrl) {
//             // Split the URL to get the image path and add the required prefix
//             const imagePath = fullImageUrl.split('/images/')[1];
//             imageUrl = `api/Companyapi/images/${imagePath}`;
//             console.log('Constructed Image URL:', imageUrl); // Debugging: Log the constructed image URL
//         } else {
//             console.error('Image URL is not available');
//         }

//         const itemDetails = `
//             <p>Name: ${item.name}</p>
//             <p>About: ${item.about}</p>
//             <p>Start Bid: ${item.start_bid}</p>
//             <p>Length: ${item.length}</p>
//             <p>Age: ${item.age ? item.age : 'N/A'}</p>
//             <p>Weight: ${item.weight}</p>
//             ${imageUrl ? `<img src="${imageUrl}" alt="Item Image" width="200">` : '<p>No image available</p>'}
//         `;
//         document.getElementById('itemDetails').innerHTML = itemDetails;
//     } else {
//         document.getElementById('itemDetails').innerHTML = '<p>No item to display.</p>';
//     }
// });


document.addEventListener('DOMContentLoaded', function() {
    const itemContainer = document.getElementById('itemDetails');

    // Fetch the items from the API
    fetch('http://127.0.0.1:8000/api/v1/items/')
        .then(response => response.json())
        .then(items => {
            if (items && items.length > 0) {
                items.forEach(item => {
                    console.log('Displaying Item:', item); // Debugging: Log each item details

                    // Ensure the image URL is not null and is correctly formed
                    const fullImageUrl = item.image1 ? item.image1 : '';
                    let imageUrl = '';

                    if (fullImageUrl) {
                        // Split the URL to get the image path and add the required prefix
                        const imagePath = fullImageUrl.split('/images/')[1];
                        imageUrl = `api/Companyapi/images/${imagePath}`;
                        console.log('Constructed Image URL:', imageUrl); // Debugging: Log the constructed image URL
                    } else {
                        console.error('Image URL is not available');
                    }

                    const itemDetails = `
                        <div class="item">
                            <p>Name: ${item.name}</p>
                            <p>About: ${item.about}</p>
                            <p>Start Bid: ${item.start_bid}</p>
                            <p>Length: ${item.length}</p>
                            <p>Age: ${item.Age ? item.Age : 'N/A'}</p>
                            <p>Weight: ${item.weight}</p>
                            ${imageUrl ? `<img src="${imageUrl}" alt="Item Image" width="200">` : '<p>No image available</p>'}
                        </div>
                        <hr>
                    `;
                    itemContainer.innerHTML += itemDetails;
                });
            } else {
                itemContainer.innerHTML = '<p>No items to display.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching items:', error);
            itemContainer.innerHTML = '<p>Error fetching items.</p>';
        });
});
