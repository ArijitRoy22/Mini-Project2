let cart = JSON.parse(localStorage.getItem('section4')) || [];

let cart1 = cart.filter(item => item !== null);
console.log(cart);

function initializeCountdown(id, endTime) {
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

function displaycart() {
    if (cart1.length == 0) {
        document.getElementById('card-grid').innerHTML = "No item is saved";
    } else {
        document.getElementById("card-grid").innerHTML = cart1.map((item, index) => {
            const { id, image, title, title1, title2, title2_value, title3, title3_value, title4, title4_value, title5, endTime, title6 } = item;
            return (
                `<div class="card-preview">
                    <div class="card-img">
                        <p class="title2">${title}</p>
                        <img class="img1" src=${image} alt="Not Found">  
                    </div>
                    <p class="info-title2">${title1}</p>
                    <div class="info-preview">
                        <div class="info1">
                            <div class="info2">
                                <div class="m1">
                                    ${title2}
                                    <p>
                                        ${title2_value}
                                    </p>
                                </div>
                                <div class="m2">
                                    ${title3}
                                    <p>
                                        ${title3_value}
                                    </p>
                                </div> 
                            </div>
                            <div class="info3">
                                <div class="m3">
                                    ${title4}
                                    <p>
                                        ${title4_value}
                                    </p>
                                </div>
                                <div class="m4">
                                    ${title5}
                                    <div class="card" id="card1">
                                        <div class="timer" id="timer${id}">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="info-high">
                            ${title6}
                        </div>
                    </div>
                    <button id="saved-item1" onclick='delElement(${index})'>Remove</button>
                </div>`
            );
        }).join('');

        // Initialize countdowns for saved items
        cart1.forEach(item => {
            initializeCountdown(item.id, item.endTime);
        });
    }
}

function delElement(index) {
    cart1.splice(index, 1);
    localStorage.setItem('section4', JSON.stringify(cart1));
    displaycart();
}

displaycart();
