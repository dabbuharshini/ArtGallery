document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.btn.add-to-cart');
    const sortOptions = document.getElementById('sort-options');
    const productList = document.querySelector('.product-list');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            const productElement = button.parentElement;
            const productImg = productElement.querySelector('img').getAttribute('src');
            const productPriceText = productElement.querySelector('p').textContent;
            const productPrice = parseFloat(productPriceText.replace('Rs.', ''));

            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

            const existingItem = cartItems.find(item => item.img === productImg);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cartItems.push({
                    img: productImg,
                    price: productPrice,
                    quantity: 1
                });
            }

            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        });
    });

    sortOptions.addEventListener('change', function() {
        const selectedOption = sortOptions.value;

        if (selectedOption === 'price') {
            sortProductsByPrice();
        }
    });

    function sortProductsByPrice() {
        const products = Array.from(productList.querySelectorAll('.product'));

        products.sort((a, b) => {
            const priceA = parseFloat(a.dataset.price);
            const priceB = parseFloat(b.dataset.price);
            return priceA - priceB;
        });

        products.forEach(product => productList.appendChild(product));
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const cartButtons = document.querySelectorAll(".add-to-cart");

    cartButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Change button text
            this.textContent = "Added ✓";

            // Optionally disable the button to prevent re-adding
            this.disabled = true;

            // Optionally add a class for styling
            this.classList.add("added-to-cart");

            // You can also update cart quantity here if needed
            updateCartQuantity();
        });
    });
});

// Dummy function: replace with your real cart logic
function updateCartQuantity() {
    const cartIcon = document.getElementById("cart-icon");
    let count = parseInt(cartIcon.getAttribute("data-quantity"));
    count += 1;
    cartIcon.setAttribute("data-quantity", count);
}
