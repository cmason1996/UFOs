// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody")

// Begin the function for building the table the data will live in by making sure the data is reset to original after each use
function buildTable(data) {
    tbody.html("");
};

// Adding the forEach function to loop through all of the rows data.js and append a new row of cells for each object in the data
data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
    );
});

// Adding a function to hold the D3.js for the "date" filter
// The .select() is a D3 attribute that will match the first value matching our requirement, in this case the "#datetime"
// The .property("value") is telling D3 to not only look for the given value but to also grab onto it and hold it in the "date" variable
function handleClick() {
    let date = d3.select("#datetime").property("value");
    // Setting a default filter equal to the original table so users can select their own filter when they want to
    let filterData = tableData;
    // Adding an if statement to filter for the date entered or return the default data
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Build the table that the filtered data will live in, if there is no date given then the default table will show
    buildTable(filteredData);
};

// Add the code to "listen" for a button click for the filter
d3.selectAll("#filter-btn").on("click", handleClick);

// Add the code that will load the table when the webpage loads so users till know what they're lookking at
builtTable(tableData);