// SECTION SWITCHER
function showSection(id) {
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// DEFAULT SECTION (HOME)
showSection("home");


// CART SYSTEM
let cart = [];

document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        let name = this.dataset.name;
        let price = parseInt(this.dataset.price);

        let item = cart.find(p => p.name === name);

        if (item) {
            item.qty++;
        } else {
            cart.push({ name, price, qty: 1 });
        }

        updateCart();
        alert(name + " added to cart!");
    });
});

function updateCart() {
    let cartBody = document.getElementById("cart-items");
    let total = 0;

    cartBody.innerHTML = "";

    cart.forEach(item => {
        let subtotal = item.price * item.qty;
        total += subtotal;

        cartBody.innerHTML += `
        <tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.qty}</td>
            <td>${subtotal}</td>
        </tr>
        `;
    });

    document.getElementById("total").innerText = total;
}


// LOGIN PROTECTION
if (window.location.hash === "#login") {
    showSection("login");
}

// FORM AUTO LOGIN SET
document.querySelector("#login form")?.addEventListener("submit", function () {
    localStorage.setItem("loggedIn", "true");
});


// LOGOUT
function logout() {
    localStorage.removeItem("loggedIn");
    alert("Logged Out Successfully");
    showSection("login");
}


