// =============Buy Now items localstorage =============

function Additemsinlocalstorage(buyItems) {
  localStorage.setItem("BuyItems", JSON.stringify(buyItems));
}

// =============Add to cart items localstorage =============

function AddcartLocalstorage() {
  return JSON.parse(localStorage.getItem("BuyItems")) || [];
}

AddToCartBtn = document.querySelector("#AddToCartBtn");
let selectedShoes;
AddToCartBtn.addEventListener("click", function (e) {
  selectedShoes = this.closest("#HeroBox");

  let name = selectedShoes.dataset.name;
  let price = selectedShoes.dataset.price;
  let image = selectedShoes.dataset.image;

  if (countValue <= 0) {
    return;
  }
  AddshoesintoCart(
    selectedShoes.dataset.name,
    parseFloat(selectedShoes.dataset.price.replace(/[^\d.]/g, "")),
    selectedShoes.dataset.image,
    countValue,
  );

  countValue = 0;
  Count.textContent = countValue;
});

function AddshoesintoCart(name, price, image, countValue) {
  let getcart = AddcartLocalstorage();

  let finditem = getcart.find((item) => item.name === name);

  if (finditem) {
    finditem.quantity += countValue;
  } else {
    getcart.push({ name, price, image, quantity: countValue });
  }

  Additemsinlocalstorage(getcart);
}
