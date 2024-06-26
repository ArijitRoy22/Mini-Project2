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

// document.addEventListener('DOMContentLoaded', () => {
//     const product = JSON.parse(localStorage.getItem('selectedProduct'));

//     if (product) {
//         document.getElementById('auction-container').innerHTML = `
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

//         // Fetch the latest bid details every 2 seconds
//         setInterval(() => {
//             fetch(`http://127.0.0.1:8000/api/v1/items/${product.item_id}/`)
//                 .then(response => response.json())
//                 .then(data => {
//                     const highestBidElement = document.getElementById('highestBid');
//                     if (highestBidElement && data.start_bid !== parseFloat(highestBidElement.textContent.split('₹')[1])) {
//                         highestBidElement.innerHTML = `<span style="font-size: 20px;">₹</span>${data.start_bid}`;
//                     }
//                 })
//                 .catch(error => console.error('Error fetching item details:', error));
//         }, 2000); // Every 2 seconds
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


// document.addEventListener('DOMContentLoaded', () => {
//     const product = JSON.parse(localStorage.getItem('selectedProduct'));

//     if (product) {
//         document.getElementById('auction-container').innerHTML = `
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

//         // Initialize countdown for the loaded product
//         initializeCountdown(product.id, product.endTime);

//         // Fetch the latest bid details every 2 seconds
//         setInterval(() => {
//             fetch(`http://127.0.0.1:8000/api/v1/items/${product.item_id}/`)
//                 .then(response => response.json())
//                 .then(data => {
//                     const highestBidElement = document.getElementById('highestBid');
//                     if (highestBidElement && data.start_bid !== parseFloat(highestBidElement.textContent.split('₹')[1])) {
//                         highestBidElement.innerHTML = `<span style="font-size: 20px;">₹</span>${data.start_bid}`;
//                     }
//                 })
//                 .catch(error => console.error('Error fetching item details:', error));
//         }, 2000); // Every 2 seconds
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

// function initializeCountdown(id, endTime) {
//     const endTimeDate = new Date(endTime); // Parse endTime directly

//     const x = setInterval(function() {
//         const now = new Date().getTime(); // Get current time in milliseconds
//         const distance = endTimeDate.getTime() - now; // Calculate the distance in milliseconds

//         if (distance <= 0) { // Check if time has already passed or is exactly zero
//             clearInterval(x);
//             const timerElement = document.getElementById("timer" + id);
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

//         const timerElement = document.getElementById("timer" + id);
//         if (timerElement) {
//             timerElement.innerHTML = daysDisplay + hoursDisplay + minutesDisplay + secondsDisplay;
//         }
//     }, 1000); // Update every second
// }

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

// document.addEventListener('DOMContentLoaded', () => {
//     const product = JSON.parse(localStorage.getItem('selectedProduct'));

//     if (product) {
//         document.getElementById('auction-container').innerHTML = `
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
//             <p>Winner User</p>
//             <img class="img2" src=${product.image} alt="Not Found">
//             <input id="bidInput" class="bid" type="number" placeholder="">
//             <button id="placeBidButton" class="bid-button" onclick='bidding("${product.item_id}")'>Place Bid</button>
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

//         // Initialize countdown for the loaded product
//         initializeCountdown(product.id, product.endTime);

//         // Fetch the latest bid details every 2 seconds
//         setInterval(() => {
//             fetch(`http://127.0.0.1:8000/api/v1/items/${product.item_id}/`)
//                 .then(response => response.json())
//                 .then(data => {
//                     const highestBidElement = document.getElementById('highestBid');
//                     if (highestBidElement && data.start_bid !== parseFloat(highestBidElement.textContent.split('₹')[1])) {
//                         highestBidElement.innerHTML = `<span style="font-size: 20px;">₹</span>${data.start_bid}`;
//                     }
//                 })
//                 .catch(error => console.error('Error fetching item details:', error));
//         }, 2000); // Every 2 seconds
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

// function initializeCountdown(id, endTime) {
//     const endTimeDate = new Date(endTime); // Parse endTime directly

//     const x = setInterval(function() {
//         const now = new Date().getTime(); // Get current time in milliseconds
//         const distance = endTimeDate.getTime() - now; // Calculate the distance in milliseconds

//         if (distance <= 0) { // Check if time has already passed or is exactly zero
//             clearInterval(x);
//             const timerElement = document.getElementById("timer" + id);
//             if (timerElement) {
//                 timerElement.innerHTML = "EXPIRED";
//             }
//             // Hide the Place Bid button when the auction ends
//             const placeBidButton = document.getElementById('placeBidButton');
//             if (placeBidButton) {
//                 placeBidButton.style.display = 'none';
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

//         const timerElement = document.getElementById("timer" + id);
//         if (timerElement) {
//             timerElement.innerHTML = daysDisplay + hoursDisplay + minutesDisplay + secondsDisplay;
//         }
//     }, 1000); // Update every second
// }

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
            <p id="winnerUser"></p>
            <img class="img2" src=${product.image} alt="Not Found">
            <input id="bidInput" class="bid" type="number" placeholder="">
            <button id="placeBidButton" class="bid-button" onclick='bidding("${product.item_id}")'>Place Bid</button>
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

        // Initialize countdown for the loaded product
        initializeCountdown(product.id, product.endTime, product.item_id);

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

function initializeCountdown(id, endTime, itemId) {
    const endTimeDate = new Date(endTime); // Parse endTime directly

    const x = setInterval(function() {
        const now = new Date().getTime(); // Get current time in milliseconds
        const distance = endTimeDate.getTime() - now; // Calculate the distance in milliseconds

        if (distance <= 0) { // Check if time has already passed or is exactly zero
            clearInterval(x);
            const timerElement = document.getElementById("timer" + id);
            if (timerElement) {
                timerElement.innerHTML = "EXPIRED";
            }
            // Hide the Place Bid button when the auction ends
            const placeBidButton = document.getElementById('placeBidButton');
            if (placeBidButton) {
                placeBidButton.style.display = 'none';
            }
            // Fetch the winner's username from the highest bid
            fetch('http://127.0.0.1:8000/api/v1/bids/')
                .then(response => response.json())
                .then(data => {
                    const bid = data.find(bid => bid.item === itemId);
                    if (bid) {
                        const winnerUserElement = document.getElementById('winnerUser');
                        if (winnerUserElement) {
                            winnerUserElement.innerHTML = `Winner ${bid.username}`;
                        }
                    } else {
                        console.log("No bid found for this product");
                    }
                })
                .catch(error => console.error('Error fetching bids:', error));

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

        const timerElement = document.getElementById("timer" + id);
        if (timerElement) {
            timerElement.innerHTML = daysDisplay + hoursDisplay + minutesDisplay + secondsDisplay;
        }
    }, 1000); // Update every second
}

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
            .catch(error => {
                console.error('Error fetching bids:', error);
            });
    } else {
        alert('You must be logged in to place a bid.');
    }
}
