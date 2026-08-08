function setWareCard(
  name = "ware",
  description = "description",
  price = 0,
  oldPrice = "undefined",
) {
  let card = `
  <div class="ware-img-container">
        <img src="./assets/img/ware.png" alt="${name}" class="ware-img" />
      </div>
      <h2 class="ware-name" title="${name}">${name}</h2>
      <p class="ware-description" title="${description}">
        ${description}
      </p>
      <footer class="ware-priceBuy-section">
        <div class="ware-prices">
          <span class="ware-current-price">${price}</span>
          ${oldPrice ? `<s class="ware-old-price" >${oldPrice}</s>` : ""}
        </div>
        <button class="ware-buy" type="button">Придбати зараз</button>
      </footer>
      `;
  return card;
}

// document.getElementById("ware-card").innerHTML = setWareCard(
//   prompt("Введіть нахву товару"),
//   prompt("Введіть опис товару"),
//   prompt("Ввндіть цінц товару"),
//   prompt("Введіть стару ціну товару (за наявності)"),
// );
