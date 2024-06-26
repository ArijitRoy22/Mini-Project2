let cart = JSON.parse(localStorage.getItem('section4')) || [];

let cart1 = cart.filter(item => item !== null);
console.log(cart)
// document.getElementById("count").innerHTML = cart.length;

function displaycart(){
    // let total = 0;
    if(cart1.length == 0){
        document.getElementById('card-grid').innerHTML = "No item is saved";
        // document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("card-grid").innerHTML = cart1.map((item, index) => {
            var {id, image, title, title1, title2, title2_value, title3, title3_value, title4, title4_value, title5, title6} = item;
            // total += price;
            return(
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
                                        <div class="time" id="days${id}"></div>
                                        <div class="time" id="hours${id}"></div>
                                        <div class="time" id="minutes${id}"></div>
                                        <div class="time" id="seconds${id}"></div>
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
        // document.getElementById("total").innerHTML = "$ "+total+".00";
    }
}

function delElement(index){
    cart1.splice(index, 1);
    localStorage.setItem('section4', JSON.stringify(cart1));
    // document.getElementById("count").innerHTML = cart.length;
    displaycart();
}
displaycart();
