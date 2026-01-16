const form = document.getElementById("product-form");
const productList = document.getElementById("product-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;

  if (name === "" || price === "") return;

  // CRIA O CARD
  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <h3>${name}</h3>
    <p><strong>Preço:</strong> R$ ${Number(price).toFixed(2)}</p>
    <p><strong>Quantidade:</strong> 1</p>
    <button class="remove-btn">Remover</button>
  `;

  // BOTÃO REMOVER
  card.querySelector(".remove-btn").addEventListener("click", () => {
    card.remove();
  });

  productList.appendChild(card);

  form.reset();
});
