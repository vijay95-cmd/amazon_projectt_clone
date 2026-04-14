const cartCount = document.getElementById("cartCount");
const addToCartButtons = document.querySelectorAll(".add-cart");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

let cartItems = 0;

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartItems += 1;
    cartCount.textContent = String(cartItems);
    button.textContent = "Added";
    button.disabled = true;
  });
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();

  if (!query) {
    searchInput.focus();
    return;
  }

  window.alert(`Searching for: ${query}`);
});
