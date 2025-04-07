const modal = document.getElementById("quickViewModal");
const btn = document.getElementById("quickViewBtn");
const span = document.querySelector(".close");
const sizeButtons = document.querySelectorAll(".size-btn");
const priceElement = document.getElementById("modalProductPrice");
const quantityInput = document.getElementById("quantityInput");
const increaseQty = document.getElementById("increaseQty");
const decreaseQty = document.getElementById("decreaseQty");
const modalImage = document.getElementById("modalProductImage");

btn.onclick = function () {
  modal.style.display = "flex";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Size button logic with dynamic image change
sizeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sizeButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const price = button.getAttribute("data-price");
    const imageSrc = button.getAttribute("data-image");

    priceElement.textContent = `$${price}`;
    modalImage.src = imageSrc;
  });
});

// Quantity increase
increaseQty.addEventListener("click", () => {
  quantityInput.value = parseInt(quantityInput.value) + 1;
});

// Quantity decrease
decreaseQty.addEventListener("click", () => {
  if (parseInt(quantityInput.value) > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
});
