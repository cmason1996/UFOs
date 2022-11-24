// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody")
// Begin the function for building the table the data will live in by making sure the data is reset to original after each use
function buildTable(data) {
    tbody.html("");
}
// Adding the forEach function to loop through all of the rows data.js and append a new row of cells for each object in the data
data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
    );
});