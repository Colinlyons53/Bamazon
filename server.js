
// Require/import the HTTP module
var http = require("http");
var inquirer = require('inquirer');
var mysql = require('mysql');


// Define a port to listen for incoming requests
var PORT = 3306;
// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "127.0.0.1",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "Bamazon"
  });

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });


// // function which prompts the user for what action they should take
// function start() {
//     connection.query(
//         "select * from products", function(err, res, fields){
//             if (err) throw err;
//             console.table(res);

//         }) 

//     }
//     inquirer
//       .prompt({
//         name: "postOrBid",
//         type: "list",
//         message: "Would you like to [POST] an auction or [BID] on an auction?",
//         choices: ["POST", "BID", "EXIT"]
//       })
//       .then(function(answer) {
//         // based on their answer, either call the bid or the post functions
//         if (answer.postOrBid === "POST") {
//           postAuction();
//         }
//         else if(answer.postOrBid === "BID") {
//           bidAuction();
//         } else{
//           connection.end();
//         }
//       });
  
  
  

// // Create a generic function to handle requests and responses
// function handleRequest(request, response) {

//   // Send the below string to the client when the user visits the PORT URL
//   response.end("It Works!! Path Hit: " + request.url);
// }

// // Use the Node HTTP package to create our server.
// // Pass the handleRequest function to empower it with functionality.
// var server = http.createServer(handleRequest);

// // Start our server so that it can begin listening to client requests.
// server.listen(PORT, function() {

//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });


