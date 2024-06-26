
// const product = [
//     {
//         id: 0,
//         image: 'Resources/rolex.webp',
//         title: 'Rolex Oyster Daytona',
//         title1: 'Information',
//         title2: 'Length',
//         title3: 'Weight',
//         title4: 'Age',
//         title5: 'Time Left',
//         title2_value: '40mm',
//         title3_value: '150gm',
//         title4_value: '57 Years',
//         title6: 'Highest Bid',
//         title7: '<span style="font-size: 20px;">₹</span>2000'
//     },

//     {
//         id: 1,
//         image: 'Resources/Vacheron_&_Constantin_18ct_chronograph.png',
//         title: 'Z Foldable Mobile',
//         title1: 'Information',
//         title2: 'Length',
//         title3: 'Weight',
//         title4: 'Age',
//         title5: 'Time Left',
//         title2_value: '40mm',
//         title3_value: '150gm',
//         title4_value: '57 Years',
//         title6: 'Highest Bid'
//     },

//     {
//         id: 2,
//         image: 'Resources/Patek_Philippe_18ct_automatic.png',
//         title: 'Z Foldable Mobile',
//         title1: 'Information',
//         title2: 'Length',
//         title3: 'Weight',
//         title4: 'Age',
//         title5: 'Time Left',
//         title2_value: '40mm',
//         title3_value: '150gm',
//         title4_value: '57 Years',
//         title6: 'Highest Bid'
//     },

//     {
//         id: 3,
//         image: 'Resources/J_W_Benson_half_hunter_crown_wind.png',
//         title: 'Z Foldable Mobile',
//         title1: 'Information',
//         title2: 'Length',
//         title3: 'Weight',
//         title4: 'Age',
//         title5: 'Time Left',
//         title2_value: '40mm',
//         title3_value: '150gm',
//         title4_value: '57 Years',
//         title6: 'Highest Bid'
//     },

//     {
//         id: 4,
//         image: 'Resources/watch4.png',
//         title: 'Z Foldable Mobile',
//         title1: 'Information',
//         title2: 'Length',
//         title3: 'Weight',
//         title4: 'Age',
//         title5: 'Time Left',
//         title2_value: '40mm',
//         title3_value: '150gm',
//         title4_value: '57 Years',
//         title6: 'Highest Bid'
//     },

//     {
//         id: 5,
//         image: 'Resources/rolex.webp',
//         title: 'Z Foldable Mobile',
//         title1: 'Information',
//         title2: 'Length',
//         title3: 'Weight',
//         title4: 'Age',
//         title5: 'Time Left',
//         title2_value: '40mm',
//         title3_value: '150gm',
//         title4_value: '57 Years',
//         title6: 'Highest Bid'
//     },

//     {
//         id: 6,
//         image: 'Resources/rolex.webp',
//         title: 'Rolex Oyster Daytona',
//         title1: 'Information',
//         title2: 'Length',
//         title3: 'Weight',
//         title4: 'Age',
//         title5: 'Time Left',
//         title2_value: '40mm',
//         title3_value: '150gm',
//         title4_value: '57 Years',
//         title6: 'Highest Bid'
//     },


//     // ... rest of your products ...
// ];


// let cart = JSON.parse(localStorage.getItem('section4')) || [];

// let i = 0;
// document.getElementById('card-grid').innerHTML = product.map((item, index) => {


//     var { id, image, title, title1, title2, title2_value, title3, title3_value, title4, title4_value, title5, title6, title7 } = item;
//     return (
//         `<div class="card-preview">
//             <div class="card-img">
//                 <p class="title2">${title}</p>
//                 <img class="img1" src=${image} alt="Not Found">  
//             </div>
//         <p class="info-title2">${title1}</p>
//         <div class="info-preview">
//             <div class="info1">
//                 <div class="info2">
//                     <div class="m1">
//                         ${title2}
//                         <p>
//                             ${title2_value}
//                         </p>
//                     </div>
//                     <div class="m2">
//                         ${title3}
//                         <p>
//                             ${title3_value}
//                         </p>
//                     </div> 
//                 </div>
//                 <div class="info3">
//                     <div class="m3">
//                         ${title4}
//                         <p>
//                             ${title4_value}
//                         </p>
//                     </div>
//                     <div class="m4">
//                         ${title5}
//                         <div class="card" id="card1">
//                             <div class="timer" id="timer${id}">
//                                 <div class="time" id="days${id}"></div>
//                                 <div class="time" id="hours${id}"></div>
//                                 <div class="time" id="minutes${id}"></div>
//                                 <div class="time" id="seconds${id}"></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="info-high">
//                 ${title6}
//                 <p>${title7}</p>
//             </div>
//         </div>
//         <button class="saved-item" onclick='addtocart(${index})'>Saved Item</button>
//         <button class="auction-item" onclick='goToAuctionPage(${index})'>Auction</button>
//     </div>`
//     )
// }).join('')

// // function addtocart(index) {
// //     var loggedUser = localStorage.getItem('refresh_token');
// //     if(loggedUser){
// //     cart.push(product[index]);
// //     localStorage.setItem('section4', JSON.stringify(cart));
// //     }else{
// //         alert("You're not logged in. Please login first!");
// //     }
// //     // document.getElementById("count").innerHTML = cart.length;
// // }



// function addtocart(index) {
//     var loggedUser = localStorage.getItem('refresh_token');
//     if (loggedUser) {
//         cart.push(product[index]);
//         localStorage.setItem('section4', JSON.stringify(cart));
//     } else {
//         alert("You're not logged in. Please login first!");
//     }
//     // document.getElementById("count").innerHTML = cart.length;
// }


// function goToAuctionPage(index) {
//     localStorage.setItem('selectedProduct', JSON.stringify(product[index]));
//     window.location.href = 'Store1.html';
// }

// // function delElement(index){
// //     cart.splice(index, 1);
// //     localStorage.setItem('cart', JSON.stringify(cart));
// //     displaycart();

// // }


// let product = [
//     {
//         id: 0,
//         image: 'Resources/rolex.webp',
//         title: 'Rolex Oyster Daytona',
//         title1: 'Information',
//         title2: 'Length',
//         title3: 'Weight',
//         title4: 'Age',
//         title5: 'Time Left',
//         title2_value: '40mm',
//         title3_value: '150gm',
//         title4_value: '57 Years',
//         title6: 'Highest Bid',
//         title7: '2000'
//     },


    // {
    //     id: 1,
    //     image: 'Resources/Vacheron_&_Constantin_18ct_chronograph.png',
    //     title: 'Z Foldable Mobile',
    //     title1: 'Information',
    //     title2: 'Length',
    //     title3: 'Weight',
    //     title4: 'Age',
    //     title5: 'Time Left',
    //     title2_value: '40mm',
    //     title3_value: '150gm',
    //     title4_value: '57 Years',
    //     title6: 'Highest Bid'
    // },

    // {
    //     id: 2,
    //     image: 'Resources/Patek_Philippe_18ct_automatic.png',
    //     title: 'Z Foldable Mobile',
    //     title1: 'Information',
    //     title2: 'Length',
    //     title3: 'Weight',
    //     title4: 'Age',
    //     title5: 'Time Left',
    //     title2_value: '40mm',
    //     title3_value: '150gm',
    //     title4_value: '57 Years',
    //     title6: 'Highest Bid'
    // },

    // {
    //     id: 3,
    //     image: 'Resources/J_W_Benson_half_hunter_crown_wind.png',
    //     title: 'Z Foldable Mobile',
    //     title1: 'Information',
    //     title2: 'Length',
    //     title3: 'Weight',
    //     title4: 'Age',
    //     title5: 'Time Left',
    //     title2_value: '40mm',
    //     title3_value: '150gm',
    //     title4_value: '57 Years',
    //     title6: 'Highest Bid'
    // },

    // {
    //     id: 4,
    //     image: 'Resources/watch4.png',
    //     title: 'Z Foldable Mobile',
    //     title1: 'Information',
    //     title2: 'Length',
    //     title3: 'Weight',
    //     title4: 'Age',
    //     title5: 'Time Left',
    //     title2_value: '40mm',
    //     title3_value: '150gm',
    //     title4_value: '57 Years',
    //     title6: 'Highest Bid'
    // },

    // {
    //     id: 5,
    //     image: 'Resources/rolex.webp',
    //     title: 'Z Foldable Mobile',
    //     title1: 'Information',
    //     title2: 'Length',
    //     title3: 'Weight',
    //     title4: 'Age',
    //     title5: 'Time Left',
    //     title2_value: '40mm',
    //     title3_value: '150gm',
    //     title4_value: '57 Years',
    //     title6: 'Highest Bid'
    // },

    // {
    //     id: 6,
    //     image: 'Resources/rolex.webp',
    //     title: 'Rolex Oyster Daytona',
    //     title1: 'Information',
    //     title2: 'Length',
    //     title3: 'Weight',
    //     title4: 'Age',
    //     title5: 'Time Left',
    //     title2_value: '40mm',
    //     title3_value: '150gm',
    //     title4_value: '57 Years',
    //     title6: 'Highest Bid'
    // },

    // Other static product items...
// ];

// let fetchedItems = []; // Initialize an empty array for fetched items

// let combinedProducts = []; // Initialize combinedProducts globally

// // Fetch details from database or API
// fetch('http://127.0.0.1:8000/api/v1/items/')  // Example endpoint; replace with your actual API URL
//     .then(response => response.json())
//     .then(data => {
//         // Assume data is an array of fetched items
//         fetchedItems = data.map((item, index) => ({
//             id: product.length + index, // Assign unique IDs starting after the product array
//             image: item.image1 ? `api/Companyapi/images/${item.image1.split('/images/')[1]}` : 'default-image-url.jpg', // Adjust image URL construction as needed
//             title: item.name,
//             title1: 'Information',
//             title2: 'Length',
//             title2_value: `${item.length}mm`,
//             title3: 'Weight',
//             title3_value: `${item.weight}gm`,
//             title4: 'Age',
//             title4_value: `${item.Age} Years`,
//             title5: 'Time Left',
//             title6: 'Highest Bid',
//             title7: item.start_bid,
//             item_id: item.id
//         }));

//         // console.log('Fetched Items:', fetchedItems);
//         // console.log(data[0].id);

//         // Combine fetched items with existing product array
//         combinedProducts = [...product, ...fetchedItems];
//         // console.log(combinedProducts)


//         // Update UI with combined products
//         updateProductUI(combinedProducts);
//     })
//     // .catch(error => console.error('Error fetching items:', error));

// function updateProductUI(products) {
//     // Display products on UI
//     document.getElementById('card-grid').innerHTML = products.map((item, index) => {
//         const { id, image, title, title1, title2, title2_value, title3, title3_value, title4, title4_value, title5, title6, title7 } = item;
//         return (
//             `<div class="card-preview">
//                 <div class="card-img">
//                     <p class="title2">${title}</p>
//                     <img class="img1" src="${image}" alt="Not Found">
//                 </div>
//                 <p class="info-title2">${title1}</p>
//                 <div class="info-preview">
//                     <div class="info1">
//                         <div class="info2">
//                             <div class="m1">
//                                 ${title2}
//                                 <p>${title2_value}</p>
//                             </div>
//                             <div class="m2">
//                                 ${title3}
//                                 <p>${title3_value}</p>
//                             </div> 
//                         </div>
//                         <div class="info3">
//                             <div class="m3">
//                                 ${title4}
//                                 <p>${title4_value}</p>
//                             </div>
//                             <div class="m4">
//                                 ${title5}
//                                 <div class="card" id="card1">
//                                     <div class="timer" id="timer${id}">
//                                         <div class="time" id="days${id}"></div>
//                                         <div class="time" id="hours${id}"></div>
//                                         <div class="time" id="minutes${id}"></div>
//                                         <div class="time" id="seconds${id}"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="info-high">
//                         ${title6}
//                         <p><span style="font-size: 20px;">₹</span>${title7}</p>
//                     </div>
//                 </div>
//                 <button class="saved-item" onclick="addtocart(${index})">Saved Item</button>
//                 <button class="auction-item" onclick="goToAuctionPage(${index})">Auction</button>
//             </div>`
//         );
//     }).join('');
// }

// let cart = JSON.parse(localStorage.getItem('section4')) || [];

// function addtocart(index) {
//     var loggedUser = localStorage.getItem('refresh_token');
//     if (loggedUser) {
//         cart.push(combinedProducts[index]); // Push from combinedProducts
//         localStorage.setItem('section4', JSON.stringify(cart));
//     } else {
//         alert("You're not logged in. Please login first!");
//     }
// }

// function goToAuctionPage(index) {
//     localStorage.setItem('selectedProduct', JSON.stringify(combinedProducts[index])); // Select from combinedProducts

//     window.location.href = 'Store1.html';
// }


let product = [
    // {
    //     id: 0,
    //     image: 'Resources/rolex.webp',
    //     title: 'Rolex Oyster Daytona',
    //     title1: 'Information',
    //     title2: 'Length',
    //     title3: 'Weight',
    //     title4: 'Age',
    //     title5: 'End Time',
    //     title2_value: '40mm',
    //     title3_value: '150gm',
    //     title4_value: '57 Years',
    //     title6: 'Highest Bid',
    //     title7: '2000',
    //     end_bid: '2024-06-26T21:53:00Z' // Example end_bid time
    // },
];

let fetchedItems = []; // Initialize an empty array for fetched items

let combinedProducts = []; // Initialize combinedProducts globally

// Fetch details from database or API
// fetch('http://127.0.0.1:8000/api/v1/items/')  // Example endpoint; replace with your actual API URL
//     .then(response => response.json())
//     .then(data => {
//         // Assume data is an array of fetched items
//         fetchedItems = data.map((item, index) => ({
//             id: product.length + index, // Assign unique IDs starting after the product array
//             image: item.image1 ? `api/Companyapi/images/${item.image1.split('/images/')[1]}` : 'default-image-url.jpg', // Adjust image URL construction as needed
//             title: item.name,
//             title1: 'Information',
//             title2: 'Length',
//             title2_value: `${item.length}mm`,
//             title3: 'Weight',
//             title3_value: `${item.weight}gm`,
//             title4: 'Age',
//             title4_value: `${item.Age} Years`,
//             title5: 'End Time',
//             title6: 'Highest Bid',
//             title7: item.start_bid,
//             end_bid: item.end_bid,
//             item_id: item.id
//         }));

//         // Combine fetched items with existing product array
//         combinedProducts = [...product, ...fetchedItems];

//         // Update UI with combined products
//         updateProductUI(combinedProducts);
//     })
//     .catch(error => console.error('Error fetching items:', error));

// function updateProductUI(products) {
//     // Display products on UI
//     document.getElementById('card-grid').innerHTML = products.map((item, index) => {
//         const { id, image, title, title1, title2, title2_value, title3, title3_value, title4, title4_value, title5, title6, title7, end_bid } = item;
//         return (
//             `<div class="card-preview">
//                 <div class="card-img">
//                     <p class="title2">${title}</p>
//                     <img class="img1" src="${image}" alt="Not Found">
//                 </div>
//                 <p class="info-title2">${title1}</p>
//                 <div class="info-preview">
//                     <div class="info1">
//                         <div class="info2">
//                             <div class="m1">
//                                 ${title2}
//                                 <p>${title2_value}</p>
//                             </div>
//                             <div class="m2">
//                                 ${title3}
//                                 <p>${title3_value}</p>
//                             </div> 
//                         </div>
//                         <div class="info3">
//                             <div class="m3">
//                                 ${title4}
//                                 <p>${title4_value}</p>
//                             </div>
//                             <div class="m4">
//                                 ${title5}
//                                 <div class="card" id="card1">
//                                     <div class="timer" id="timer${id}">
//                                         <div class="time" id="end${id}"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="info-high">
//                         ${title6}
//                         <p><span style="font-size: 20px;">₹</span>${title7}</p>
//                     </div>
//                 </div>
//                 <button class="saved-item" onclick="addtocart(${index})">Saved Item</button>
//                 <button class="auction-item" onclick="goToAuctionPage(${index})">Auction</button>
//             </div>`
//         );
//     }).join('');

//     // Initialize countdowns for all products
//     products.forEach((product) => {
//         initializeCountdown(product.id, product.end_bid);
//     });
// }

// let cart = JSON.parse(localStorage.getItem('section4')) || [];

// function addtocart(index) {
//     var loggedUser = localStorage.getItem('refresh_token');
//     if (loggedUser) {
//         cart.push(combinedProducts[index]); // Push from combinedProducts
//         localStorage.setItem('section4', JSON.stringify(cart));
//     } else {
//         alert("You're not logged in. Please login first!");
//     }
// }

// function goToAuctionPage(index) {
//     localStorage.setItem('selectedProduct', JSON.stringify(combinedProducts[index])); // Select from combinedProducts

//     window.location.href = 'Store1.html';
// }

// function initializeCountdown(id, endTime) {
//     const endTimeDate = new Date(endTime).getTime(); // Parse endTime directly

//     const x = setInterval(function() {
//         const now = new Date().getTime(); // Get current time
//         const distance = endTimeDate - now;

//         if (distance <= 0) { // Check if time has already passed or is exactly zero
//             clearInterval(x);
//             const timerElement = document.getElementById("end" + id);
//             if (timerElement) {
//                 timerElement.innerHTML = "EXPIRED";
//             }
//             return;
//         }

//         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//         const daysDisplay = days > 0 ? days + "d " : "";
//         const hoursDisplay = hours > 0 ? hours + "h " : "";
//         const minutesDisplay = (hours > 0 || minutes > 0) ? minutes + "m " : "";
//         const secondsDisplay = seconds + "s ";

//         const timerElement = document.getElementById("end" + id);
//         if (timerElement) {
//             timerElement.innerHTML = daysDisplay + hoursDisplay + minutesDisplay + secondsDisplay;
//         }
//     }, 1000); // Update every second
// }

function initializeCountdown(id, endTime) {
    const endTimeDate = new Date(endTime); // Parse endTime directly
    console.log(endTimeDate.getTime()); // Log the endTimeDate
    // console.log(endTimeDate.getUTCHours()); // Log UTC hours
    // console.log(endTimeDate.getUTCMinutes()); // Log UTC minutes
    // console.log(endTimeDate.getUTCSeconds()); // Log UTC seconds

    const x = setInterval(function() {
        const now = new Date().getTime(); // Get current time in milliseconds
        const distance = endTimeDate.getTime() - now; // Calculate the distance in milliseconds

        if (distance <= 0) { // Check if time has already passed or is exactly zero
            clearInterval(x);
            const timerElement = document.getElementById("end" + id);
            if (timerElement) {
                timerElement.innerHTML = "EXPIRED";
            }
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysDisplay = days > 0 ? days + "d " : "";
        const hoursDisplay = hours > 0 ? hours + "h " : "";
        const minutesDisplay = (hours > 0 || minutes > 0) ? minutes + "m " : "";
        const secondsDisplay = seconds + "s ";

        const timerElement = document.getElementById("end" + id);
        if (timerElement) {
            timerElement.innerHTML = daysDisplay + hoursDisplay + minutesDisplay + secondsDisplay;
        }
    }, 1000); // Update every second
}

fetch('http://127.0.0.1:8000/api/v1/items/')  // Example endpoint; replace with your actual API URL
    .then(response => response.json())
    .then(data => {
        // Assume data is an array of fetched items
        fetchedItems = data.map((item, index) => ({
            id: product.length + index, // Assign unique IDs starting after the product array
            image: item.image1 ? `api/Companyapi/images/${item.image1.split('/images/')[1]}` : 'default-image-url.jpg', // Adjust image URL construction as needed
            title: item.name,
            title1: 'Information',
            title2: 'Length',
            title2_value: `${item.length}mm`,
            title3: 'Weight',
            title3_value: `${item.weight}gm`,
            title4: 'Age',
            title4_value: `${item.Age} Years`,
            title5: 'End Time', // Change to End Time
            endTime: item.end_bid, // Use end_bid for endTime
            title6: 'Highest Bid',
            title7: item.start_bid,
            item_id: item.id
        }));

        combinedProducts = [...product, ...fetchedItems];

        updateProductUI(combinedProducts);
    })
    .catch(error => console.error('Error fetching items:', error));

function updateProductUI(products) {
    document.getElementById('card-grid').innerHTML = products.map((item, index) => {
        const { id, image, title, title1, title2, title2_value, title3, title3_value, title4, title4_value, title5, endTime, title6, title7 } = item;
        return (
            `<div class="card-preview">
                <div class="card-img">
                    <p class="title2">${title}</p>
                    <img class="img1" src="${image}" alt="Not Found">
                </div>
                <p class="info-title2">${title1}</p>
                <div class="info-preview">
                    <div class="info1">
                        <div class="info2">
                            <div class="m1">
                                ${title2}
                                <p>${title2_value}</p>
                            </div>
                            <div class="m2">
                                ${title3}
                                <p>${title3_value}</p>
                            </div> 
                        </div>
                        <div class="info3">
                            <div class="m3">
                                ${title4}
                                <p>${title4_value}</p>
                            </div>
                            <div class="m4">
                                ${title5}
                                <div class="card" id="card1">
                                    <div class="timer" id="end${id}">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="info-high">
                        ${title6}
                        <p><span style="font-size: 20px;">₹</span>${title7}</p>
                    </div>
                </div>
                <button class="saved-item" onclick="addtocart(${index})">Saved Item</button>
                <button class="auction-item" onclick="goToAuctionPage(${index})">Auction</button>
            </div>`
        );
    }).join('');

    // Initialize countdowns
    products.forEach(item => {
        initializeCountdown(item.id, item.endTime);
    });
}

function goToAuctionPage(index) {
    localStorage.setItem('selectedProduct', JSON.stringify(combinedProducts[index])); // Select from combinedProducts

    window.location.href = 'Store1.html';
}

let cart = JSON.parse(localStorage.getItem('section4')) || [];

function addtocart(index) {
    var loggedUser = localStorage.getItem('refresh_token');
    if (loggedUser) {
        cart.push(combinedProducts[index]); // Push from combinedProducts
        localStorage.setItem('section4', JSON.stringify(cart));
    } else {
        alert("You're not logged in. Please login first!");
    }
}

function searchProducts() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const filteredProducts = combinedProducts.filter(product => product.title.toLowerCase().includes(query));
    updateProductUI(filteredProducts);
}