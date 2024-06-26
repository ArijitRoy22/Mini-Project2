const product = [
    {
        id: 1,
        image: 'ee-3.jpeg',
        title: 'Z Flip Foldable Mobile',
        title1: 'Information',
        title2: 'Length',
        title3: 'Weight',
        title4: 'Age',
        title5: 'Time Left',
        title2_value: '40mm',
        title3_value: '150gm',
        title4_value: '57 Years',
        title6: 'Bye'
    },

    {
        id: 2,
        image: 'ee-3.jpeg',
        title: 'Z Foldable Mobile',
        title1: 'Information',
        title2: 'Length',
        title3: 'Weight',
        title4: 'Age',
        title5: 'Time Left',
        title2_value: '40mm',
        title3_value: '150gm',
        title4_value: '57 Years',
        title6: 'Bye'
    },

    {
        id: 3,
        image: 'ee-3.jpeg',
        title: 'Z Foldable Mobile',
        title1: 'Information',
        title2: 'Length',
        title3: 'Weight',
        title4: 'Age',
        title5: 'Time Left',
        title2_value: '40mm',
        title3_value: '150gm',
        title4_value: '57 Years',
        title6: 'Bye'
    },

    {
        id: 4,
        image: 'ee-3.jpeg',
        title: 'Z Foldable Mobile',
        title1: 'Information',
        title2: 'Length',
        title3: 'Weight',
        title4: 'Age',
        title5: 'Time Left',
        title2_value: '40mm',
        title3_value: '150gm',
        title4_value: '57 Years',
        title6: 'Bye'
    },

    {
        id: 5,
        image: 'ee-3.jpeg',
        title: 'Z Foldable Mobile',
        title1: 'Information',
        title2: 'Length',
        title3: 'Weight',
        title4: 'Age',
        title5: 'Time Left',
        title2_value: '40mm',
        title3_value: '150gm',
        title4_value: '57 Years',
        title6: 'Bye'
    },

    {
        id: 6,
        image: 'ee-3.jpeg',
        title: 'Z Foldable Mobile',
        title1: 'Information',
        title2: 'Length',
        title3: 'Weight',
        title4: 'Age',
        title5: 'Time Left',
        title2_value: '40mm',
        title3_value: '150gm',
        title4_value: '57 Years',
        title6: 'Bye'
    },

    {
        id: 7,
        image: 'ee-3.jpeg',
        title: 'Z Flip Foldable Mobile',
        title1: 'Information',
        title2: 'Length',
        title3: 'Weight',
        title4: 'Age',
        title5: 'Time Left',
        title2_value: '40mm',
        title3_value: '150gm',
        title4_value: '57 Years',
        title6: 'Bye'
    },


    // ... rest of your products ...
];

let cart = JSON.parse(localStorage.getItem('section4')) || [];

let i=0;
document.getElementById('card-grid').innerHTML = product.map((item, index) => {
    var {id, image, title, title1, title2, title2_value, title3, title3_value, title4, title4_value, title5, title6} = item;
    return(
        `<div class="card-preview">
        <div class="card-img">
            <p class="title">${title}</p>
            <img class="img1" src=${image} alt="Not Found">  
        </div>
        <p class="info-title">${title1}</p>
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
        <button onclick='addtocart(${index})'>Saved Item</button>
    </div>`
    )
}).join('')

function addtocart(index){
    cart.push(product[index]);
    localStorage.setItem('section4', JSON.stringify(cart));
    document.getElementById("count").innerHTML = cart.length;
}

// function delElement(index){
//     cart.splice(index, 1);
//     localStorage.setItem('cart', JSON.stringify(cart));
//     displaycart();

// }
