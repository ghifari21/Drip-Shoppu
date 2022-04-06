if (!sessionStorage.cart) {
  sessionStorage.cart = JSON.stringify([]);
}

var form = document.getElementById("form-cart-input");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  var itemName = form.elements["itemName"].value;
  var itemPrice = form.elements["itemPrice"].value;
  var itemSize = form.elements["sizeChart"].value;
  var itemQuantity = document.getElementsByClassName("quantity")[0].value;

  const cart = JSON.parse(sessionStorage.cart);
  var flag = false;
  for (let index = 0; index < cart.length; index++) {
    if (cart[index].itemName == itemName && cart[index].itemSize == itemSize) {
      flag = true;
      break;
    }
  }

  if (!flag) {
    cart.push({ itemName, itemPrice, itemSize, itemQuantity });
    sessionStorage.cart = JSON.stringify(cart);
    alert("Item Telah Berhasil Ditambahkan!");
  } else {
    alert("Item Sudah Ada Di Keranjang!");
  }
});
