window.addEventListener('load', function(){

    var content = document.getElementById('content');

    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    for(var j = 0; j < 3; j++){
        var row = document.createElement('tr');

        for(var i = 0; i < 4; i++){
            var cell = document.createElement('td');
            var cellNode = document.createTextNode("Row: "+ j + " Cell: " + i);
            cell.appendChild(cellNode);
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    content.appendChild(table);
    table.setAttribute('class', 'table table-bordered');

}, false);