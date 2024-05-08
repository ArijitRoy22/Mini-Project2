const product = [
    {
        id: 0,
        image: 'gg-1.jpeg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },

    {
        id: 1,
        image: 'aa-1.jpeg',
        title: 'Z Foldable Mobile',
        price: 120,
    },
    // ... rest of your products ...
];

let cart = JSON.parse(localStorage.getItem('section4')) || [];

let i=0;
document.getElementById('root').innerHTML = product.map((item, index) => {
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>
                <button onclick='addtocart(${index})'>Add to cart</button>
            </div>
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
