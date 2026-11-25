
// Mobile Navigation Menu
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}

// Add to Cart Function
function addToCart(productName) {
    alert(productName + " has been added to your cart!");
}

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been received.");

    this.reset();
});
