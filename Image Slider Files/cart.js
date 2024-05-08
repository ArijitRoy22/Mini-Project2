let cart = JSON.parse(localStorage.getItem('cart')) || [];
document.getElementById("count").innerHTML = cart.length;

function displaycart(){
    let total = 0;
    if(cart.length == 0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((item, index) => {
            var {image, title, price} = item;
            total += price;
            return(
                `
                    <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>`
            );
        }).join('');
        document.getElementById("total").innerHTML = "$ "+total+".00";
    }
}

function delElement(index){
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById("count").innerHTML = cart.length;
    displaycart();
}

displaycart();
