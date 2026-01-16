const form = document.getElementById("product-form");
const productList = document.getElementById("product-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;

  if (name === "" || price === "") {
    alert("Preencha todos os campos!");
    return;
  }

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>-</td>
    <td>R$ ${Number(price).toFixed(2)}</td>
    <td>1</td>
  `;

  productList.appendChild(row);

  form.reset();
});
