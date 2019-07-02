// Require/import the HTTP module
var http = require("http");
var inquirer = require('inquirer');
var mysql = require('mysql');


// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "127.0.0.1",

  // Your port; if not 3306
  port: 7001,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "Bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();

});


// function which prompts the user for what action they should take
function start() {
  connection.query(
    "select * from products",
    function (err, res, ) {
      if (err) throw err;
      console.table(res);

    })

}



var buy = {
inquirer
  .prompt([{
    name: "item_id",
    type: "input",
    message: "what is the item_id of the item you would like to purchase?"
  }, {
    name: "quantity",
    type: Number,
    message: "How many units would you like to purchase?"
  }])

  .then(function (answer) {

    var item = buy.item_id;

    var quantity = buy.quantity;

    var queryStr = "SELECT (*) FROM products WHERE ?";

    connection.query(queryStr, { item_id: item }, function(err, res) {
      if (err) throw err

      if (res.length === 0) {
        console.log("ERROR: Invalid Item ID. Please select a valid Item ID.")
        displayInventory()
    } else {








}


// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function () {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});