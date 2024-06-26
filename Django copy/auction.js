document.addEventListener('DOMContentLoaded', () => {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));

    if (product) {
        document.getElementById('auction-container').innerHTML = `
        <div class=search-container>
            <img class="search-icon" src="../Resources/Search.png">
            <input class="search" type="text" placeholder="Search">
        </div>
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
                    <p><span style="font-size: 20px;">₹</span>${product.title7}</p>
                </div>
            </div>
        </div>

        <div class="Auction">
            <p>Auction</p>
            <img class="img2" src=${product.image} alt="Not Found">
            <input id="bidInput" class="bid" type="number" placeholder="">
            <button class="bid-button" onclick='bidding(${product.id})'>Place Bid</button>
        </div>
        `;

        console.log(product.item_id)
        const bidInput = document.getElementById('bidInput');
        if (product.title7) {
            bidInput.placeholder = product.title7.toString();
        } else {
            bidInput.placeholder = 'Enter bid amount'; // Default placeholder if title7 is not defined
        }
    } else {
        document.getElementById('auction-container').innerHTML = `<p>No product selected</p>`;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.back').addEventListener('click', function() {
        console.log("Hello")
        window.location.href = 'Store.html'
    });
});