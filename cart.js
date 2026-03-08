// // Get all the add-to-cart buttons
// const addToCartButtons = document.querySelectorAll('.add-to-cart');

// // Get the cart icon element
// const cartIcon = document.getElementById('cart-icon');

// // Get the current quantity from the cart icon's data attribute
// let cartQuantity = parseInt(cartIcon.getAttribute('data-quantity'));

// // Add event listeners to each add-to-cart button
// addToCartButtons.forEach(button => {
//     button.addEventListener('click', (event) => {
//         event.preventDefault();
//         cartQuantity += 1;
//         cartIcon.setAttribute('data-quantity', cartQuantity);
//         updateCartIcon(cartQuantity);
//     });
// });

// // Function to update the cart icon display
// function updateCartIcon(quantity) {
//     cartIcon.innerHTML = `<i class="fa-solid fa-bag-shopping"></i> ${quantity}`;
// }

// Get all the add-to-cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Get the cart icon element
const cartIcon = document.getElementById('cart-icon');

// Get the current quantity from the cart icon's data attribute
let cartQuantity = parseInt(cartIcon.getAttribute('data-quantity'));

// Add event listeners to each add-to-cart button
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        cartQuantity += 1;
        cartIcon.setAttribute('data-quantity', cartQuantity);
    });
});
