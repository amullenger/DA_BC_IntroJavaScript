// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
var button = d3.select('#filter-btn');

var tbody = d3.select('tbody');

tableData.forEach((sighting) => {
    var row = tbody.append('tr');

    Object.entries(sighting).forEach(([key, value]) => {
        var cell = tbody.append('td');
        cell.text(value);
    });
});


function handleClick() {
    d3.event.preventDefault();

    //remove existing table data
    var bodyRef = document.getElementById('ufo-table').getElementsByTagName('tbody')[0];
    bodyRef.innerHTML = '';
    
    //pull date inputted by user and define function to filter table
    var inputDateElement = d3.select('#datetime');
    var inputDateValue = inputDateElement.property('value');

    function filterSightings(table){
        return table.datetime === inputDateValue;
    };

    //apply function to create filtered table
    filteredSightings = tableData.filter(filterSightings);
    
    //append filtered data to HTML table
    filteredSightings.forEach((sighting) => {
        var row = tbody.append('tr');

        Object.entries(sighting).forEach(([key, value]) => {
            var cell = tbody.append('td');
            cell.text(value);
        });
    });
};

button.on('click', handleClick);

