if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var orderBtn = document.getElementsByClassName("order-btn")[0];
  orderBtn.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Terima Kasih Telah Bertransaksi Di Drip Shoppu");
    sessionStorage.removeItem("cart");
    window.location.reload();
  });
  addToCart();
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("item-container")[0];
  var cartRows = cartItemContainer.getElementsByClassName("item-row");
  var total = 0;
  for (let index = 0; index < cartRows.length; index++) {
    var cartRow = cartRows[index];
    var priceElement = cartRow.getElementsByClassName("item-price")[0];
    var quantityElement = cartRow.getElementsByClassName("item-quantity-data")[0];
    var price = parseInt(priceElement.innerText);
    var quantity = quantityElement.innerText;
    total += price * quantity;
  }
  document.getElementsByClassName("total-price")[0].innerText = "Rp " + total;
}

function addToCart() {
  var cart = JSON.parse(sessionStorage.cart);
  for (let index = 0; index < cart.length; index++) {
    var cartRow = document.createElement("tr");
    cartRow.classList.add("item-row");
    var cartItems = document.getElementsByClassName("item-container")[0];
    var cartRowContents = `
    <td class="item-name">${cart[index].itemName}</td>
    <td class="item-size">${cart[index].itemSize}</td>
    <td class="item-price">${cart[index].itemPrice}</td>
    <td class="item-quantity">
        <p class="item-quantity-data">${cart[index].itemQuantity}</p>
    </td>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
  }
  updateCartTotal();
}
