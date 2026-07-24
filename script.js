function addToCart(name, price){

    let cart =
        JSON.parse(localStorage.getItem("cart"))
        || [];

let existingItem = cart.find(item => item.name === name);

if(existingItem){
    existingItem.quantity++;
}
else{
    cart.push({
        name: name,
        price: price,
        quantity: 1
    });
}
   
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

        total += item.price*item.quantity;

        cartDiv.innerHTML += `
           <div class="food-box">
    <h3>${item.name}</h3>

    <button onclick="decreaseQuantity('${item.name}')">-</button>

    <span> ${item.quantity} </span>

    <button onclick="increaseQuantity('${item.name}')">+</button>

    <p>₹${item.price * item.quantity}</p>
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


function increaseQuantity(name){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.forEach(item => {
        if(item.name === name){
            item.quantity++;
        }
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

function decreaseQuantity(name){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.forEach(item => {
        if(item.name === name && item.quantity > 1){
            item.quantity--;
        }
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(e) {

        e.preventDefault();

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();

        if (username === "" || password === "") {
            alert("Please fill all fields!");
            return;
        }

        alert("Login Successful!");
        window.location.href = "index.html";
    });

}

function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
}