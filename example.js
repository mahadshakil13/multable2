
var table = prompt("Enter table");
//operator = GetValueFromUser("operator");
//table = GetValueFromUser("table");
// Write the message into the page

var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplication Table</h2>'; // Message
// Do multiplication
while (i < 11) {
  msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
  i++;
}


var el = document.getElementById('blackboard');
el.innerHTML = msg;