function addToCart(name, price){

    let cart =
        JSON.parse(localStorage.getItem("cart"))
        || [];

    cart.push({
        name:name,
        price:price
    });

    
    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(name + " added to cart!");
}
 
function displayCart(){

    let cart =
        JSON.parse(localStorage.getItem("cart"))
        || [];

    let cartDiv =
        document.getElementById("cart-items");

    if(!cartDiv) return;

    let total = 0;

    cart.forEach(item => {

        total += item.price;

        cartDiv.innerHTML += `
            <div class="food-box">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
            </div>
        `;
    });

    cartDiv.innerHTML += `
        <h2>Total : ₹${total}</h2>
    `;
}

displayCart();

function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("active");
}
