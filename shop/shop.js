let productsJSON = `[
{
"name": "Игровые наушники Logitech G435",
"id": "logitechG435",
"price": 7999
},
{
"name": "Игровые наушники ARDOR GAMING Blackout",
"id": "blackout",
"price": 11999
},
{
"name": "Беспроводная механическая клавиатура Red Square keyrox tkl aquarius",
"id": "aquaris",
"price": 11999
},
{
"name": "Беспроводная механическая клавиатура ARDOR GAMING Patron",
"id": "patron",
"price": 6699
}
]`;

let jsn = JSON.parse(productsJSON);
updateCartCount();
let div = document.createElement("div");
div.classList.add("itemList");
for (let items of jsn) {
  let div2 = document.createElement("div");
  div2.classList.add("item");
  let pPrice = document.createElement("p");
  let pName = document.createElement("p");
  let img = document.createElement("img");
  img.src = `${items.id}.png`;

  let div3 = document.createElement("div");
  div3.classList.add("div_img");

  let button = document.createElement("button");
  button.classList.add("btn");
  button.textContent = "Добавить в корзину";
  button.addEventListener("click", () => addToCart(items));

  pName.textContent = items.name;
  pPrice.textContent = items.price;
  div3.append(img);
  div2.append(div3);

  div2.append(pName);
  div2.append(pPrice);

  main.append(div);
  div.append(div2);
  div2.append(button);
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || {};
  if (cart[product.id]) {
    cart[product.id].amount += 1;
  } else {
    cart[product.id] = { ...product, amount: 1 };
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || {};
  let itemCount = 0;
  for (const key in cart) {
    if (cart.hasOwnProperty(key)) {
      itemCount += cart[key].amount;
    }
  }
  document.querySelector("nav span").textContent = itemCount;
}
