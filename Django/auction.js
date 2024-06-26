// document.addEventListener('DOMContentLoaded', () => {
//     const product = JSON.parse(localStorage.getItem('selectedProduct'));

//     if (product) {
//         document.getElementById('auction-container').innerHTML = `
//         <div class=search-container>
//             <img class="search-icon" src="../Resources/Search.png">
//             <input class="search" type="text" placeholder="Search">
//         </div>
//         <p class="title2">${product.title}</p>
//         <button class="saved-item" onclick='addtocart(${product.id})'>Save Item</button>
//         <div class="card-preview">
//             <div class="card-img">
//                 <img class="img1" src=${product.image} alt="Not Found">  
//             </div>
//             <p class="info-title2">${product.title1}</p>
//             <div class="info-preview">
//                 <div class="info1">
//                     <div class="info2">
//                         <div class="m1">
//                             ${product.title2}
//                             <p>${product.title2_value}</p>
//                         </div>
//                         <div class="m2">
//                             ${product.title3}
//                             <p>${product.title3_value}</p>
//                         </div> 
//                     </div>
//                     <div class="info3">
//                         <div class="m3">
//                             ${product.title4}
//                             <p>${product.title4_value}</p>
//                         </div>
//                         <div class="m4">
//                             ${product.title5}
//                             <div class="card" id="card1">
//                                 <div class="timer" id="timer${product.id}">
//                                     <div class="time" id="days${product.id}"></div>
//                                     <div class="time" id="hours${product.id}"></div>
//                                     <div class="time" id="minutes${product.id}"></div>
//                                     <div class="time" id="seconds${product.id}"></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="info-high">
//                     <img class="high-priority" src="../Resources/High_Priority.png">
//                     <p>${product.title6}</p>
//                     <p><span style="font-size: 20px;">₹</span>${product.title7}</p>
//                 </div>
//             </div>
//         </div>

//         <div class="Auction">
//             <p>Auction</p>
//             <img class="img2" src=${product.image} alt="Not Found">
//             <input id="bidInput" class="bid" type="number" placeholder="">
//             <button class="bid-button" onclick='bidding("${product.item_id}")'>Place Bid</button>
//         </div>
//         `;

//         console.log(product.item_id)
//         console.log(product.id)
//         const bidInput = document.getElementById('bidInput');
//         if (product.title7) {
//             bidInput.placeholder = product.title7.toString();
//         } else {
//             bidInput.placeholder = 'Enter bid amount'; // Default placeholder if title7 is not defined
//         }
//     } else {
//         document.getElementById('auction-container').innerHTML = `<p>No product selected</p>`;
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('.back').addEventListener('click', function() {
//         console.log("Hello")
//         window.location.href = 'Store.html'
//     });
// });

// // function bidding() {
// //     var loggedUser = localStorage.getItem('refresh_token');
// //     if (loggedUser) {
// //         console.log("Success")
// //     } else {
// //         alert("You're not logged in. Please login first!");
// //     }
// // }

// function bidding(productId) {
//     var loggedUser = localStorage.getItem('refresh_token');
//     var username = localStorage.getItem('user_name')
//     console.log(localStorage.getItem('refresh_token'))
//     console.log(username)
//     console.log(productId)
//     if (loggedUser) {
//         // Fetch the list of bids
//         fetch('http://127.0.0.1:8000/api/v1/bids/')
//             .then(response => response.json())
//             .then(data => {
//                 // Find the bid with item_id matching the selected product's item_id
//                 const bid = data.find(bid => bid.item === productId);
//                 if (bid) {
//                     console.log("Success, Bid ID:", bid.id);
//                     // Perform any other actions you need with the bid ID here
//                 } else {
//                     console.log("No bid found for this product");
//                     // Handle case where no bid is found (if needed)
//                 }
//             })
//             .catch(error => console.error('Error fetching bids:', error));
//     } else {
//         alert("You're not logged in. Please login first!");
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const product = JSON.parse(localStorage.getItem('selectedProduct'));

//     if (product) {
//         document.getElementById('auction-container').innerHTML = `
//         <div class=search-container>
//             <img class="search-icon" src="../Resources/Search.png">
//             <input class="search" type="text" placeholder="Search">
//         </div>
//         <p class="title2">${product.title}</p>
//         <button class="saved-item" onclick='addtocart(${product.id})'>Save Item</button>
//         <div class="card-preview">
//             <div class="card-img">
//                 <img class="img1" src=${product.image} alt="Not Found">  
//             </div>
//             <p class="info-title2">${product.title1}</p>
//             <div class="info-preview">
//                 <div class="info1">
//                     <div class="info2">
//                         <div class="m1">
//                             ${product.title2}
//                             <p>${product.title2_value}</p>
//                         </div>
//                         <div class="m2">
//                             ${product.title3}
//                             <p>${product.title3_value}</p>
//                         </div> 
//                     </div>
//                     <div class="info3">
//                         <div class="m3">
//                             ${product.title4}
//                             <p>${product.title4_value}</p>
//                         </div>
//                         <div class="m4">
//                             ${product.title5}
//                             <div class="card" id="card1">
//                                 <div class="timer" id="timer${product.id}">
//                                     <div class="time" id="days${product.id}"></div>
//                                     <div class="time" id="hours${product.id}"></div>
//                                     <div class="time" id="minutes${product.id}"></div>
//                                     <div class="time" id="seconds${product.id}"></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="info-high">
//                     <img class="high-priority" src="../Resources/High_Priority.png">
//                     <p>${product.title6}</p>
//                     <p><span style="font-size: 20px;">₹</span>${product.title7}</p>
//                 </div>
//             </div>
//         </div>

//         <div class="Auction">
//             <p>Auction</p>
//             <img class="img2" src=${product.image} alt="Not Found">
//             <input id="bidInput" class="bid" type="number" placeholder="">
//             <button class="bid-button" onclick='bidding("${product.item_id}")'>Place Bid</button>
//         </div>
//         `;

//         console.log(product.item_id)
//         console.log(product.id)
//         const bidInput = document.getElementById('bidInput');
//         if (product.title7) {
//             bidInput.placeholder = product.title7.toString();
//         } else {
//             bidInput.placeholder = 'Enter bid amount'; // Default placeholder if title7 is not defined
//         }
//     } else {
//         document.getElementById('auction-container').innerHTML = `<p>No product selected</p>`;
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('.back').addEventListener('click', function() {
//         console.log("Hello")
//         window.location.href = 'Store.html'
//     });
// });

// function bidding(productId) {
//     var loggedUser = localStorage.getItem('refresh_token');
//     var username = localStorage.getItem('user_name')
//     var bidAmount = document.getElementById('bidInput').value;
//     console.log(localStorage.getItem('refresh_token'))
//     console.log(username)
//     console.log(productId)
//     if (loggedUser) {
//         // Fetch the list of bids
//         fetch('http://127.0.0.1:8000/api/v1/bids/')
//             .then(response => response.json())
//             .then(data => {
//                 // Find the bid with item_id matching the selected product's item_id
//                 const bid = data.find(bid => bid.item === productId);
//                 if (bid) {
//                     console.log("Success, Bid ID:", bid.id);
//                     // Prepare the data for the PUT request
//                     const updatedBid = {
//                         id: bid.id,
//                         current_bid: parseFloat(bidAmount),
//                         username: username,
//                         item: productId
//                     };

//                     // Perform the PUT request to update the bid
//                     fetch(`http://127.0.0.1:8000/api/v1/bids/${bid.id}/`, {
//                         method: 'PUT',
//                         headers: {
//                             'Content-Type': 'application/json',
//                             'Authorization': `Bearer ${loggedUser}`
//                         },
//                         body: JSON.stringify(updatedBid)
//                     })
//                     .then(response => response.json())
//                     .then(data => {
//                         console.log('Bid updated successfully:', data);
//                         // Perform any actions needed after successful update
//                     })
//                     .catch(error => console.error('Error updating bid:', error));
//                 } else {
//                     console.log("No bid found for this product");
//                     // Handle case where no bid is found (if needed)
//                 }
//             })
//             .catch(error => console.error('Error fetching bids:', error));
//     } else {
//         alert("You're not logged in. Please login first!");
//     }
// }


// document.addEventListener('DOMContentLoaded', () => {
//     const product = JSON.parse(localStorage.getItem('selectedProduct'));

//     if (product) {
//         document.getElementById('auction-container').innerHTML = `
//         <div class=search-container>
//             <img class="search-icon" src="../Resources/Search.png">
//             <input class="search" type="text" placeholder="Search">
//         </div>
//         <p class="title2">${product.title}</p>
//         <button class="saved-item" onclick='addtocart(${product.id})'>Save Item</button>
//         <div class="card-preview">
//             <div class="card-img">
//                 <img class="img1" src=${product.image} alt="Not Found">  
//             </div>
//             <p class="info-title2">${product.title1}</p>
//             <div class="info-preview">
//                 <div class="info1">
//                     <div class="info2">
//                         <div class="m1">
//                             ${product.title2}
//                             <p>${product.title2_value}</p>
//                         </div>
//                         <div class="m2">
//                             ${product.title3}
//                             <p>${product.title3_value}</p>
//                         </div> 
//                     </div>
//                     <div class="info3">
//                         <div class="m3">
//                             ${product.title4}
//                             <p>${product.title4_value}</p>
//                         </div>
//                         <div class="m4">
//                             ${product.title5}
//                             <div class="card" id="card1">
//                                 <div class="timer" id="timer${product.id}">
//                                     <div class="time" id="days${product.id}"></div>
//                                     <div class="time" id="hours${product.id}"></div>
//                                     <div class="time" id="minutes${product.id}"></div>
//                                     <div class="time" id="seconds${product.id}"></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="info-high">
//                     <img class="high-priority" src="../Resources/High_Priority.png">
//                     <p>${product.title6}</p>
//                     <p><span style="font-size: 20px;">₹</span>${product.title7}</p>
//                 </div>
//             </div>
//         </div>

//         <div class="Auction">
//             <p>Auction</p>
//             <img class="img2" src=${product.image} alt="Not Found">
//             <input id="bidInput" class="bid" type="number" placeholder="">
//             <button class="bid-button" onclick='bidding("${product.item_id}")'>Place Bid</button>
//         </div>
//         `;

//         console.log(product.item_id)
//         console.log(product.id)
//         const bidInput = document.getElementById('bidInput');
//         if (product.title7) {
//             bidInput.placeholder = product.title7.toString();
//         } else {
//             bidInput.placeholder = 'Enter bid amount'; // Default placeholder if title7 is not defined
//         }
//     } else {
//         document.getElementById('auction-container').innerHTML = `<p>No product selected</p>`;
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('.back').addEventListener('click', function() {
//         console.log("Hello")
//         window.location.href = 'Store.html'
//     });
// });

// function bidding(productId) {
//     var loggedUser = localStorage.getItem('refresh_token');
//     var username = localStorage.getItem('user_name')
//     var bidAmount = document.getElementById('bidInput').value;
//     console.log(localStorage.getItem('refresh_token'))
//     console.log(username)
//     console.log(productId)
//     if (loggedUser) {
//         // Fetch the list of bids
//         fetch('http://127.0.0.1:8000/api/v1/bids/')
//             .then(response => response.json())
//             .then(data => {
//                 // Find the bid with item_id matching the selected product's item_id
//                 const bid = data.find(bid => bid.item === productId);
//                 if (bid) {
//                     console.log("Success, Bid ID:", bid.id);
//                     // Prepare the data for the PUT request
//                     const updatedBid = {
//                         id: bid.id,
//                         current_bid: parseFloat(bidAmount),
//                         username: username,
//                         item: productId
//                     };

//                     // Perform the PUT request to update the bid
//                     fetch(`http://127.0.0.1:8000/api/v1/bids/${bid.id}/`, {
//                         method: 'PUT',
//                         headers: {
//                             'Content-Type': 'application/json',
//                             'Authorization': `Bearer ${loggedUser}`
//                         },
//                         body: JSON.stringify(updatedBid)
//                     })
//                     .then(response => {
//                         if (!response.ok) {
//                             return response.json().then(errorData => { throw errorData; });
//                         }
//                         return response.json();
//                     })
//                     .then(data => {
//                         console.log('Bid updated successfully:', data);
//                         // Perform any actions needed after successful update
//                     })
//                     .catch(error => {
//                         console.error('Error updating bid:', error);
//                         if (error.error) {
//                             alert(error.error);
//                         } else {
//                             alert('An error occurred while updating the bid.');
//                         }
//                     });
//                 } else {
//                     console.log("No bid found for this product");
//                     // Handle case where no bid is found (if needed)
//                 }
//             })
//             .catch(error => console.error('Error fetching bids:', error));
//     } else {
//         alert("You're not logged in. Please login first!");
//     }
// }


// document.addEventListener('DOMContentLoaded', () => {
//     const product = JSON.parse(localStorage.getItem('selectedProduct'));

//     if (product) {
//         document.getElementById('auction-container').innerHTML = `
//         <div class=search-container>
//             <img class="search-icon" src="../Resources/Search.png">
//             <input class="search" type="text" placeholder="Search">
//         </div>
//         <p class="title2">${product.title}</p>
//         <button class="saved-item" onclick='addtocart(${product.id})'>Save Item</button>
//         <div class="card-preview">
//             <div class="card-img">
//                 <img class="img1" src=${product.image} alt="Not Found">  
//             </div>
//             <p class="info-title2">${product.title1}</p>
//             <div class="info-preview">
//                 <div class="info1">
//                     <div class="info2">
//                         <div class="m1">
//                             ${product.title2}
//                             <p>${product.title2_value}</p>
//                         </div>
//                         <div class="m2">
//                             ${product.title3}
//                             <p>${product.title3_value}</p>
//                         </div> 
//                     </div>
//                     <div class="info3">
//                         <div class="m3">
//                             ${product.title4}
//                             <p>${product.title4_value}</p>
//                         </div>
//                         <div class="m4">
//                             ${product.title5}
//                             <div class="card" id="card1">
//                                 <div class="timer" id="timer${product.id}">
//                                     <div class="time" id="days${product.id}"></div>
//                                     <div class="time" id="hours${product.id}"></div>
//                                     <div class="time" id="minutes${product.id}"></div>
//                                     <div class="time" id="seconds${product.id}"></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="info-high">
//                     <img class="high-priority" src="../Resources/High_Priority.png">
//                     <p>${product.title6}</p>
//                     <p id="highestBid"><span style="font-size: 20px;">₹</span>${product.title7}</p>
//                 </div>
//             </div>
//         </div>

//         <div class="Auction">
//             <p>Auction</p>
//             <img class="img2" src=${product.image} alt="Not Found">
//             <input id="bidInput" class="bid" type="number" placeholder="">
//             <button class="bid-button" onclick='bidding("${product.item_id}")'>Place Bid</button>
//         </div>
//         `;

//         console.log(product.item_id);
//         console.log(product.id);
//         const bidInput = document.getElementById('bidInput');
//         const highestBidElement = document.getElementById('highestBid');
//         if (product.title7) {
//             bidInput.placeholder = product.title7.toString();
//         } else {
//             bidInput.placeholder = 'Enter bid amount'; // Default placeholder if title7 is not defined
//         }
//     } else {
//         document.getElementById('auction-container').innerHTML = `<p>No product selected</p>`;
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('.back').addEventListener('click', function() {
//         console.log("Hello");
//         window.location.href = 'Store.html';
//     });
// });

// function bidding(productId) {
//     var loggedUser = localStorage.getItem('refresh_token');
//     var username = localStorage.getItem('user_name');
//     var bidAmount = document.getElementById('bidInput').value;
//     console.log(localStorage.getItem('refresh_token'));
//     console.log(username);
//     console.log(productId);

//     if (loggedUser) {
//         // Fetch the list of bids
//         fetch('http://127.0.0.1:8000/api/v1/bids/')
//             .then(response => response.json())
//             .then(data => {
//                 // Find the bid with item_id matching the selected product's item_id
//                 const bid = data.find(bid => bid.item === productId);
//                 if (bid) {
//                     console.log("Success, Bid ID:", bid.id);
//                     // Prepare the data for the PUT request
//                     const updatedBid = {
//                         id: bid.id,
//                         current_bid: parseFloat(bidAmount),
//                         username: username,
//                         item: productId
//                     };

//                     // Perform the PUT request to update the bid
//                     fetch(`http://127.0.0.1:8000/api/v1/bids/${bid.id}/`, {
//                         method: 'PUT',
//                         headers: {
//                             'Content-Type': 'application/json',
//                             'Authorization': `Bearer ${loggedUser}`
//                         },
//                         body: JSON.stringify(updatedBid)
//                     })
//                     .then(response => {
//                         if (!response.ok) {
//                             return response.json().then(errorData => { throw errorData; });
//                         }
//                         return response.json();
//                     })
//                     .then(data => {
//                         console.log('Bid updated successfully:', data);
//                         // Update the highest bid displayed
//                         // document.getElementById('highestBid').innerHTML = `<span style="font-size: 20px;">₹</span>${data.current_bid}`;
//                         // Update the bid input placeholder
//                         // document.getElementById('bidInput').placeholder = data.current_bid.toString();
//                     })
//                     .catch(error => {
//                         console.error('Error updating bid:', error);
//                         if (error.error) {
//                             alert(error.error);
//                         } else {
//                             alert('An error occurred while updating the bid.');
//                         }
//                     });
//                 } else {
//                     console.log("No bid found for this product");
//                     // Handle case where no bid is found (if needed)
//                 }
//             })
//             .catch(error => console.error('Error fetching bids:', error));
//     } else {
//         alert("You're not logged in. Please login first!");
//     }
// }


// document.addEventListener('DOMContentLoaded', () => {
//     const product = JSON.parse(localStorage.getItem('selectedProduct'));

//     if (product) {
//         document.getElementById('auction-container').innerHTML = `
//         <div class=search-container>
//             <img class="search-icon" src="../Resources/Search.png">
//             <input class="search" type="text" placeholder="Search">
//         </div>
//         <p class="title2">${product.title}</p>
//         <button class="saved-item" onclick='addtocart(${product.id})'>Save Item</button>
//         <div class="card-preview">
//             <div class="card-img">
//                 <img class="img1" src=${product.image} alt="Not Found">  
//             </div>
//             <p class="info-title2">${product.title1}</p>
//             <div class="info-preview">
//                 <div class="info1">
//                     <div class="info2">
//                         <div class="m1">
//                             ${product.title2}
//                             <p>${product.title2_value}</p>
//                         </div>
//                         <div class="m2">
//                             ${product.title3}
//                             <p>${product.title3_value}</p>
//                         </div> 
//                     </div>
//                     <div class="info3">
//                         <div class="m3">
//                             ${product.title4}
//                             <p>${product.title4_value}</p>
//                         </div>
//                         <div class="m4">
//                             ${product.title5}
//                             <div class="card" id="card1">
//                                 <div class="timer" id="timer${product.id}">
//                                     <div class="time" id="days${product.id}"></div>
//                                     <div class="time" id="hours${product.id}"></div>
//                                     <div class="time" id="minutes${product.id}"></div>
//                                     <div class="time" id="seconds${product.id}"></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="info-high">
//                     <img class="high-priority" src="../Resources/High_Priority.png">
//                     <p>${product.title6}</p>
//                     <p id="highestBid"><span style="font-size: 20px;">₹</span>${product.title7}</p>
//                 </div>
//             </div>
//         </div>

//         <div class="Auction">
//             <p>Auction</p>
//             <img class="img2" src=${product.image} alt="Not Found">
//             <input id="bidInput" class="bid" type="number" placeholder="">
//             <button class="bid-button" onclick='bidding("${product.item_id}")'>Place Bid</button>
//         </div>
//         `;

//         console.log(product.item_id);
//         console.log(product.id);
//         const bidInput = document.getElementById('bidInput');
//         if (product.title7) {
//             bidInput.placeholder = product.title7.toString();
//         } else {
//             bidInput.placeholder = 'Enter bid amount'; // Default placeholder if title7 is not defined
//         }
//     } else {
//         document.getElementById('auction-container').innerHTML = `<p>No product selected</p>`;
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('.back').addEventListener('click', function() {
//         console.log("Hello");
//         window.location.href = 'Store.html';
//     });
// });

// function bidding(productId) {
//     var loggedUser = localStorage.getItem('refresh_token');
//     var username = localStorage.getItem('user_name');
//     var bidAmount = document.getElementById('bidInput').value;
//     console.log(localStorage.getItem('refresh_token'));
//     console.log(username);
//     console.log(productId);

//     if (loggedUser) {
//         // Fetch the list of bids
//         fetch('http://127.0.0.1:8000/api/v1/bids/')
//             .then(response => response.json())
//             .then(data => {
//                 // Find the bid with item_id matching the selected product's item_id
//                 const bid = data.find(bid => bid.item === productId);
//                 if (bid) {
//                     console.log("Success, Bid ID:", bid.id);
//                     // Prepare the data for the PUT request
//                     const updatedBid = {
//                         id: bid.id,
//                         current_bid: parseFloat(bidAmount),
//                         username: username,
//                         item: productId
//                     };

//                     // Perform the PUT request to update the bid
//                     fetch(`http://127.0.0.1:8000/api/v1/bids/${bid.id}/`, {
//                         method: 'PUT',
//                         headers: {
//                             'Content-Type': 'application/json',
//                             'Authorization': `Bearer ${loggedUser}`
//                         },
//                         body: JSON.stringify(updatedBid)
//                     })
//                     .then(response => {
//                         if (!response.ok) {
//                             return response.json().then(errorData => { throw errorData; });
//                         }
//                         return response.json();
//                     })
//                     .then(data => {
//                         console.log('Bid updated successfully:', data);
//                         // Update the highest bid displayed
//                         document.getElementById('highestBid').innerHTML = `<span style="font-size: 20px;">₹</span>${data.current_bid}`;
//                         // Update the bid input placeholder
//                         document.getElementById('bidInput').placeholder = data.current_bid.toString();

//                         // Update the item's start_bid in the items API
//                         fetch(`http://127.0.0.1:8000/api/v1/items/${productId}/`, {
//                             method: 'PATCH',
//                             headers: {
//                                 'Content-Type': 'application/json',
//                                 'Authorization': `Bearer ${loggedUser}`
//                             },
//                             body: JSON.stringify({ start_bid: data.current_bid })
//                         })
//                         .then(response => {
//                             if (!response.ok) {
//                                 return response.json().then(errorData => { throw errorData; });
//                             }
//                             return response.json();
//                         })
//                         .then(itemData => {
//                             console.log('Item updated successfully:', itemData);
//                             // Update the local storage item to reflect the new start_bid value
//                             const updatedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
//                             updatedProduct.title7 = itemData.start_bid;
//                             localStorage.setItem('selectedProduct', JSON.stringify(updatedProduct));
//                         })
//                         .catch(error => {
//                             console.error('Error updating item:', error);
//                         });
//                     })
//                     .catch(error => {
//                         console.error('Error updating bid:', error);
//                         if (error.error) {
//                             alert(error.error);
//                         } else {
//                             alert('An error occurred while updating the bid.');
//                         }
//                     });
//                 } else {
//                     console.log("No bid found for this product");
//                     // Handle case where no bid is found (if needed)
//                 }
//             })
//             .catch(error => console.error('Error fetching bids:', error));
//     } else {
//         alert("You're not logged in. Please login first!");
//     }
// }

document.addEventListener('DOMContentLoaded', () => {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));

    if (product) {
        document.getElementById('auction-container').innerHTML = `
        <p class="title2">${product.title}</p>
        <button class="saved-item" onclick='addtocart(${product.id})'>Save Item</button>
        <div class="card-preview">
            <div class="card-img">
                <img class="img1" src=${product.image} alt="Not Found">  
            </div>
            <p class="info-title2">${product.title1}</p>
            <div class="info-preview">
                <div class="info1">
                    <div class="info2">
                        <div class="m1">
                            ${product.title2}
                            <p>${product.title2_value}</p>
                        </div>
                        <div class="m2">
                            ${product.title3}
                            <p>${product.title3_value}</p>
                        </div> 
                    </div>
                    <div class="info3">
                        <div class="m3">
                            ${product.title4}
                            <p>${product.title4_value}</p>
                        </div>
                        <div class="m4">
                            ${product.title5}
                            <div class="card" id="card1">
                                <div class="timer" id="timer${product.id}">
                                    <div class="time" id="days${product.id}"></div>
                                    <div class="time" id="hours${product.id}"></div>
                                    <div class="time" id="minutes${product.id}"></div>
                                    <div class="time" id="seconds${product.id}"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="info-high">
                    <img class="high-priority" src="../Resources/High_Priority.png">
                    <p>${product.title6}</p>
                    <p id="highestBid"><span style="font-size: 20px;">₹</span>${product.title7}</p>
                </div>
            </div>
        </div>
        <div class="Auction">
            <p>Auction</p>
            <img class="img2" src=${product.image} alt="Not Found">
            <input id="bidInput" class="bid" type="number" placeholder="">
            <button class="bid-button" onclick='bidding("${product.item_id}")'>Place Bid</button>
        </div>
        `;

        console.log(product.item_id);
        console.log(product.id);
        const bidInput = document.getElementById('bidInput');
        if (product.title7) {
            bidInput.placeholder = product.title7.toString();
        } else {
            bidInput.placeholder = 'Enter bid amount'; // Default placeholder if title7 is not defined
        }

        // Fetch the latest bid details every 2 seconds
        setInterval(() => {
            fetch(`http://127.0.0.1:8000/api/v1/items/${product.item_id}/`)
                .then(response => response.json())
                .then(data => {
                    const highestBidElement = document.getElementById('highestBid');
                    if (highestBidElement && data.start_bid !== parseFloat(highestBidElement.textContent.split('₹')[1])) {
                        highestBidElement.innerHTML = `<span style="font-size: 20px;">₹</span>${data.start_bid}`;
                    }
                })
                .catch(error => console.error('Error fetching item details:', error));
        }, 2000); // Every 2 seconds
    } else {
        document.getElementById('auction-container').innerHTML = `<p>No product selected</p>`;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.back').addEventListener('click', function() {
        console.log("Hello");
        window.location.href = 'Store.html';
    });
});

function bidding(productId) {
    var loggedUser = localStorage.getItem('refresh_token');
    var username = localStorage.getItem('user_name');
    var bidAmount = document.getElementById('bidInput').value;
    console.log(localStorage.getItem('refresh_token'));
    console.log(username);
    console.log(productId);

    if (loggedUser) {
        // Fetch the list of bids
        fetch('http://127.0.0.1:8000/api/v1/bids/')
            .then(response => response.json())
            .then(data => {
                // Find the bid with item_id matching the selected product's item_id
                const bid = data.find(bid => bid.item === productId);
                if (bid) {
                    console.log("Success, Bid ID:", bid.id);
                    // Prepare the data for the PUT request
                    const updatedBid = {
                        id: bid.id,
                        current_bid: parseFloat(bidAmount),
                        username: username,
                        item: productId
                    };

                    // Perform the PUT request to update the bid
                    fetch(`http://127.0.0.1:8000/api/v1/bids/${bid.id}/`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${loggedUser}`
                        },
                        body: JSON.stringify(updatedBid)
                    })
                    .then(response => {
                        if (!response.ok) {
                            return response.json().then(errorData => { throw errorData; });
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('Bid updated successfully:', data);
                        // Update the highest bid displayed
                        document.getElementById('highestBid').innerHTML = `<span style="font-size: 20px;">₹</span>${data.current_bid}`;
                        // Update the bid input placeholder
                        document.getElementById('bidInput').placeholder = data.current_bid.toString();

                        // Update the item's start_bid in the items API
                        fetch(`http://127.0.0.1:8000/api/v1/items/${productId}/`, {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${loggedUser}`
                            },
                            body: JSON.stringify({ start_bid: data.current_bid })
                        })
                        .then(response => {
                            if (!response.ok) {
                                return response.json().then(errorData => { throw errorData; });
                            }
                            return response.json();
                        })
                        .then(itemData => {
                            console.log('Item updated successfully:', itemData);
                            // Update the local storage item to reflect the new start_bid value
                            const updatedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
                            updatedProduct.title7 = itemData.start_bid;
                            localStorage.setItem('selectedProduct', JSON.stringify(updatedProduct));
                        })
                        .catch(error => {
                            console.error('Error updating item:', error);
                        });
                    })
                    .catch(error => {
                        console.error('Error updating bid:', error);
                        if (error.error) {
                            alert(error.error);
                        } else {
                            alert('An error occurred while updating the bid.');
                        }
                    });
                } else {
                    console.log("No bid found for this product");
                    // Handle case where no bid is found (if needed)
                }
            })
            .catch(error => console.error('Error fetching bids:', error));
    } else {
        alert("You're not logged in. Please login first!");
    }
}
