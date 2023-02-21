window.addEventListener("load", solve);

function solve() {
  const make = document.getElementById("make");
  const model = document.getElementById("model");
  const year = document.getElementById("year");
  const fuelType = document.getElementById("fuel");
  const originalCost = document.getElementById("original-cost");
  const sellingPrice = document.getElementById("selling-price");
  const publishButton = document.getElementById("publish");
  const tableBody = document.getElementById("table-body");

  const tableRow = document.createElement("tr");
  tableRow.setAttribute("class", "row");
  const buttonsTd = document.createElement("td");
  const editButton = document.createElement("button");
  editButton.classList.add("action-btn");
  editButton.classList.add("edit");
  editButton.textContent = "Edit";
  const sellButton = document.createElement("button");
  sellButton.classList.add("action-btn");
  sellButton.classList.add("sell");
  sellButton.textContent = "Sell";

  publishButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      make.value == "" ||
      model.value == "" ||
      year.value == "" ||
      originalCost.value == "" ||
      sellingPrice.value == "" ||
      originalCost.value > sellingPrice.value
    ) {
      return;
    }

    const makeTd = document.createElement("td");
    makeTd.textContent = make.value;

    const modelTd = document.createElement("td");
    modelTd.textContent = model.value;

    const yearTd = document.createElement("td");
    yearTd.textContent = year.value;

    const fuelTypeTd = document.createElement("td");
    fuelTypeTd.textContent = fuelType.value;

    const originalCostTd = document.createElement("td");
    originalCostTd.textContent = originalCost.value;

    const sellingPriceTd = document.createElement("td");
    sellingPriceTd.textContent = sellingPrice.value;

    buttonsTd.appendChild(editButton);
    buttonsTd.appendChild(sellButton);

    tableRow.appendChild(makeTd);
    tableRow.appendChild(modelTd);
    tableRow.appendChild(yearTd);
    tableRow.appendChild(fuelTypeTd);
    tableRow.appendChild(originalCostTd);
    tableRow.appendChild(sellingPriceTd);
    tableRow.appendChild(buttonsTd);

    tableBody.appendChild(tableRow);

    const editMake = make.value;
    const editModel = model.value;
    const editYear = year.value;
    const editOriginalCost = originalCost.value;
    const editSellingPrice = sellingPrice.value;

    make.value = "";
    model.value = "";
    year.value = "";
    originalCost.value = "";
    sellingPrice.value = "";

    tableRow.innerHTML = ''

    editButton.addEventListener("click", (e) => {
      tableRow.remove();

      make.value = editMake;
      model.value = editModel;
      year.value = editYear;
      originalCost.value = editOriginalCost;
      sellingPrice.value = editSellingPrice;
    });

    sellButton.addEventListener('click', (e)=>{
      tableRow.remove();
      const carsList = document.getElementById('cars-list');

      const li = document.createElement('li');
      li.setAttribute('class', 'each-list');
      const modelSpan = document.createElement('span');
      modelSpan.textContent = `${editMake} ${editModel}`;

      const yearSpan = document.createElement('span');
      yearSpan.textContent = editYear;

      let difference = editSellingPrice - editOriginalCost;
      const differenceSpan = document.createElement('span');
      differenceSpan.textContent = difference;

      li.appendChild(modelSpan);
      li.appendChild(yearSpan);
      li.appendChild(differenceSpan);
      carsList.appendChild(li);

      const profit = document.getElementById('profit');
      let totalProfit = 0
      totalProfit += difference;
      profit.textContent = totalProfit.toFixed(2)
    });
  });
}
