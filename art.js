document.addEventListener("DOMContentLoaded", function() {
    const cartContent = document.querySelector('.cart-content');
    const cartTotalElement = document.getElementById('cart-total');
  /* let  cartIcon = document.querySelector("#cart-icon");
    let closeCart = document.querySelector("#close-cart");
    cartIcon.onclick = () => {
       cart.classList.add("active");
    };
   closeCart.onclick = () => {
       cart.classList.remove("active");
    };*/

    let cartTotal = 0;

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems.forEach(item => {
        const cartBox = document.createElement('div');
        cartBox.classList.add('cart-box');

        cartBox.innerHTML = `
            <img src="${item.img}" class="cart-img">
            <div class="detail-box">
                <div class="cart-price">Rs.${item.price}</div>
                <input type="number" value="${item.quantity}" class="cart-quantity" min="1">
            </div>
            <i class="fa-solid fa-trash cart-remove"></i>
        `;

        cartContent.appendChild(cartBox);

        cartTotal += item.price * item.quantity;
    });

    cartTotalElement.textContent = cartTotal;

    const cartRemoveButtons = document.querySelectorAll('.cart-remove');
    cartRemoveButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cartBox = button.parentElement;
            const imgSrc = cartBox.querySelector('.cart-img').src;

            const updatedCartItems = cartItems.filter(item => item.img !== imgSrc);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            location.reload(); // Reload the page to update the cart
        });
    });

    const quantityInputs = document.querySelectorAll('.cart-quantity');
    quantityInputs.forEach(input => {
        input.addEventListener('change', function() {
            const newQuantity = parseInt(input.value);
            const cartBox = input.parentElement.parentElement;
            const imgSrc = cartBox.querySelector('.cart-img').src;

            const cartItem = cartItems.find(item => item.img === imgSrc);
            if (cartItem) {
                cartItem.quantity = newQuantity;
            }

            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            location.reload(); // Reload the page to update the cart
        });
    });
});
