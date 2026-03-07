// =============Buy Now items localstorage =============

function Additemsinlocalstorage(buyItems) {
  localStorage.setItem("BuyItems", JSON.stringify(buyItems));
}

// =============Add to cart items localstorage =============

function AddcartLocalstorage() {
  return JSON.parse(localStorage.getItem("BuyItems")) || [];
}

let ProductCardBody = document.querySelector("#ProductCardBody");

function productsDisplay() {
  let BuyItems = AddcartLocalstorage();

  ProductCardBody.innerHTML = "";

  BuyItems.forEach((shoes, index) => {
    let ContainerFluid = document.createElement("div");
    let ContainerRow = document.createElement("div");

    let ContainerCol12 = document.createElement("div");
    ContainerCol12.classList.add(
      "d-md-flex",
      "d-flex",
      "flex-column",
      "flex-md-row",
      "justify-content-between",
      "align-items-center",
      "border",
      "border-black",
      "col-12",
      "col-md-12",
      "p-2",
      "mt-3",
      "shadow",
      "rounded",
      "Container-12",
    );

    let shoesImg = document.createElement("img");
    shoesImg.src = `${shoes.image}`;
    shoesImg.classList.add("shoesImg");

    let shoesName = document.createElement("p");
    shoesName.innerText = `${shoes.name}`;
    shoesName.classList.add("fw-bold", "ShoesName");

    let shoesQty = document.createElement("p");
    shoesQty.innerText = `${shoes.quantity}`;
    shoesQty.classList.add("fw-bold");

    let shoesPrice = document.createElement("p");
    shoesPrice.innerText = `${shoes.price * shoes.quantity}`;
    shoesPrice.classList.add("fw-bold");

    let BtnBox = document.createElement("div");
    BtnBox.classList.add(
      "d-flex",
      "justify-content-center",
      "align-items-center",
      "gap-3",
    );

    let CancelBtn = document.createElement("button");
    CancelBtn.innerText = "Cancel";
    CancelBtn.classList.add(
      "px-4",
      "py-1",
      "border-0",
      "bg-danger",
      "rounded",
      "text-white",
    );
    CancelBtn.addEventListener("click", () => CancelProduct(index));
    let BuyBtn = document.createElement("button");
    BuyBtn.innerText = "Buy Now";
    BuyBtn.classList.add(
      "px-4",
      "py-1",
      "border-0",
      "bg-success",
      "rounded",
      "text-white",
    );

    BuyBtn.addEventListener("click", () => BuyProduct(index));

    ContainerCol12.appendChild(shoesImg);
    ContainerCol12.appendChild(shoesName);
    ContainerCol12.appendChild(shoesQty);
    ContainerCol12.appendChild(shoesPrice);

    BtnBox.appendChild(CancelBtn);
    BtnBox.appendChild(BuyBtn);

    ContainerCol12.appendChild(BtnBox);

    ContainerRow.appendChild(ContainerCol12);

    ContainerFluid.appendChild(ContainerRow);

    ProductCardBody.appendChild(ContainerFluid);
  });
}

productsDisplay();

function CancelProduct(index) {
  let shoescart = AddcartLocalstorage();

  shoescart.splice(index, 1);

  Additemsinlocalstorage(shoescart);
  productsDisplay();
}

let BuyformModal = document.querySelector("#BuyformModal");
let offcanvasScrolling = document.querySelector("#offcanvasScrolling");
function BuyProduct(index) {
  BuyformModal.classList.remove("d-none");

  let offcanvas = bootstrap.Offcanvas.getInstance(offcanvasScrolling);

  if (BuyformModal) {
    offcanvas.hide();
  }
}

function closeBuyForm() {
  let closeBuyform = document.querySelector("#closeBuyform");
  closeBuyform.addEventListener("click", () => {
    BuyformModal.classList.add("d-none");
  });
}

closeBuyForm();

function itemsBuyNowForm() {
  let BuyMsgModal = document.querySelector("#BuyMsgModal");
  let BuyproductsForm = document.querySelector("#BuyproductsForm");
  BuyproductsForm.addEventListener("submit", () => {
    if (BuyproductsForm) {
      BuyMsgModal.classList.remove("d-none");
      BuyformModal.classList.add("d-none");
    }

    document.querySelector("#inputFirstName").value = "";
    document.querySelector("#inputEmail").value = "";
    document.querySelector("#inputNumber").value = "";
    document.querySelector("#inputAddress").value = "";
    document.querySelector("#inputCity").value = "";
    document.querySelector("#inputState").value = "";
    document.querySelector("#inputZip").value = "";

    setTimeout(() => {
      BuyMsgModal.classList.add("d-none");
    }, 1500);

    CancelProduct();
    productsDisplay();
  });
}

itemsBuyNowForm();
