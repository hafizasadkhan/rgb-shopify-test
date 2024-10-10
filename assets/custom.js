document.addEventListener('DOMContentLoaded', function() {
  // Get the Buy Now button
  const buyNowButton = document.getElementById('buy-now');

  // Add click event listeners to all product boxes
  const productBoxes = document.querySelectorAll('.product-box');

  productBoxes.forEach(box => {
    box.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default anchor behavior

      // Get the variant ID from the data attribute
      const variantId = this.getAttribute('data-variant-id');

      // Update the Buy Now button action
      buyNowButton.onclick = function() {
        // Redirect to the variant's URL (or handle adding to cart, etc.)
        window.location.href = `https://265d3b-fd.myshopify.com/cart/${variantId}:1`; // Adjust as necessary for your store
      };

      // Optional: Add hover effect and visual feedback
      productBoxes.forEach(box => box.classList.remove('selected')); // Remove selected class from all
      this.classList.add('selected'); // Add selected class to the clicked box
    });
  });

  // Set the default selected product box (first box)
  const defaultBox = productBoxes[0];
  if (defaultBox) {
    defaultBox.click(); // Trigger click on the first product box
  }
});
