const form = document.getElementById("product-form");
const productList = document.getElementById("product-list");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;

    if (name === "" || price === "") return;

    const row = document.createElement("tr");

    const tdProduto = document.createElement("td");
    tdProduto.textContent = name;

    const tdDescricao = document.createElement("td");
    tdDescricao.textContent = "-";

    const tdPreco = document.createElement("td");
    tdPreco.textContent = `R$ ${Number(price).toFixed(2)}`;

    const tdQuantidade = document.createElement("td");
    tdQuantidade.textContent = "1";

    row.appendChild(tdProduto);
    row.appendChild(tdDescricao);
    row.appendChild(tdPreco);
    row.appendChild(tdQuantidade);

    productList.appendChild(row);

    form.reset();
});
