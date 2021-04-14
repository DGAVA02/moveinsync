    function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
var seq=0;

function myFunction() {

  var name1=document.getElementById("name1").value;
  var city= document.getElementById("city").value;
  var degree=document.getElementById("degree").value;
  seq += 1
  var i = '';
  i=seq;
  

  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var d='';
  d=Date();

  cell1.innerHTML = name1;
  cell2.innerHTML = i;
  cell3.innerHTML = city;
  cell4.innerHTML = degree;
  cell5.innerHTML = d;
  closeForm()
}