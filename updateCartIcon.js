function updateCartIcon() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const cartIcon = document.querySelector('#cart-icon');
    
    if (cartIcon) {
        cartIcon.setAttribute('data-quantity', totalItems);  // Update data-quantity attribute
    }
}

document.addEventListener("DOMContentLoaded", function() {
    updateCartIcon();

    window.addEventListener('storage', function(event) {
        if (event.key === 'cartItems') {
            updateCartIcon();
        }
    });
});
