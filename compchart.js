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
    headerElement.textContent = headerText;
    tableHead.querySelector("tr").appendChild(headerElement);
  }
}
loadIntoTable("https://sjattwood.com/projects/compchart/compchart-data.json", document.querySelector("table"));
