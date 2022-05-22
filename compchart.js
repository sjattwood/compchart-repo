async function  loadIntoTable(url, table) {
  const tableHead = table.querySelector("thead");
  const tableBody = table.querySelector("tbody");
  const response = await fetch(url);
  const { headers, features } = await response.json(); //makes the json an js object

  //clear the table
  tableHead.innerHTML = "<tr></tr>";
  tableBody.innerHTML = "";

  //populate the headers
  for (const headerText of headers) {
    const headerElement = document.createElement("th");
    headerElement.classList.add("prodname");
    headerElement.textContent = headerText;
    tableHead.querySelector("tr").appendChild(headerElement);
  }

  //populate the features
  let row = 1;
  for (const feature of features) {
    const featureElement = document.createElement("tr");
    featureElement.classList.add("row-" + row );
    row++;
    let col = 1;
    for (const cellText of feature) {
      const cellElement = document.createElement("td");
      cellElement.classList.add("col-" + col);
      col++;
      cellElement.textContent = cellText;
      featureElement.appendChild(cellElement);
    }

    tableBody.appendChild(featureElement);
  }
}
//loadIntoTable("https://sjattwood.com/projects/compchart/compchart-data.json", document.querySelector("table"));
// loadIntoTable("https://sjattwood.github.io/compchart-repo/compchart-data.json", document.querySelector("table"));
loadIntoTable("https://sjattwood.github.io/compchart-repo/animals-chart2.json", document.querySelector("table"));
