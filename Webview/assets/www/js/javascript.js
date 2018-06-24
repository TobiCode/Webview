var data = [
  ['Gemues', 'Preis[Euro]', 'Menge'],
  ['Tomaten', '1', '1kg'],
  ['Karotten', '0.5', '1kg'],
  ['Äpfel', '2', '4kg'],
  ['Kartoffeln', '3', '10kg'],
];
function buildTable(data){
  var table = '<table id = "gemueseTable">';
  for (var i=0; i<data.length; i++) {
    var row = data[i];
    if (i==0){
      table += '<thead>';
      table += '<tr>';
    }else{
      table += '<tr>';
    }

    for (var j=0; j<row.length; j++){
      if (i==0){
        table += '<th>';
        table += row[j];
        table += '</th>';
      }else{
        table += '<td contenteditable=true>';
        table += row[j];
        table += '</td>';
      }
    }

    if (i == 0) {
      table += '</tr>';
      table += '</thead>';
      table += '<tbody>';
    } else {
      table += '</tr>';
    }
  }
  table += '</tbody>';
  table += '</table>';
  document.body.innerHTML += table;
  }

  function search() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("gemueseTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    tds = tr[i].getElementsByTagName("td");
    for(j=0; j< tds.length; j++){
      if (tds[j]) {
        if (tds[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}

function saveChanges(){
  var rows = document.getElementsByTagName("tr");
  var tds_count = rows[1].getElementsByTagName("td").length;
  var new_data =[rows.length] ;

  //Iterate through rows
  for (i = 0; i < rows.length; i++) {
    var row_elements = [];
    if(i==0){
      var ths = rows[i].getElementsByTagName("th");
        for(j=0; j<ths.length; j++){
            data[i][j] = ths[j].innerText;
            row_elements[j] = ths[j].innerText;
        }
    }
    else{
    var tds = rows[i].getElementsByTagName("td");
      for(j=0; j<tds.length; j++){
          data[i][j] = tds[j].innerText;
          row_elements[j] = tds[j].innerText;
      }
    }
    new_data[i] = row_elements;
  }
  console.log("Test");
  console.log(new_data);
  return new_data;
}
