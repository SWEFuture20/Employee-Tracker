var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 5500,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "cms_db"
});

connection.connect(function(err) {
    // if (err) throw err;
    askEmployees();
  });

  function askEmployees(){
    inquirer
      .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View All Departments",
        "View All Employees",
        "View All Roles",
      ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "View All Departments":
          deptSearch();
          break;
        }
      });
}

function deptSearch() {
  inquirer
    .prompt({
      name: "department",
      type: "rawlist",
      message: "Which department do you want to search?",
      choices:[
        "Hardware",
        "Data",
        "Security",
      ]
    })
    .then(function(answer) {
      var query = "SELECT name_p, first_name, last_name FROM department, employee WHERE ?";
      connection.query(query, function(err, res) {
        if (answer.action === "Hardware"){
          console.log("ID: " + res[i].id + " || Department: " + res[i].name_p);
        }
        // for (var i = 0; i < res.length; i++) {
        //   console.log("Position: " + res[i].id + " || Song: " + res[i].name_p);
        // }
        askEmployees();
      });
    });
}