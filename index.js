var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "cms_db"
});

connection.connect(function(err) {
    if (err) throw err;
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
        "Add Employees",
        "Add Departments",
        "Add Roles",
        "Update Employee Role"
      ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "View All Departments":
          viewDepartment();
          break;

        case "View All Employees":
          viewEmployees();
          break;

          case "View All Roles":
            viewRoles();
            break;
  
          case "Add Employee":
            addEmployee();
            break;
  
          case "Add Department":
            addDepartment();
            break;
  
          case "Add Role":
            addRole();
            break;
  
          case "Update Employee Role":
            updateEmployeeRole();
            break; 
        }
      });
}

function viewDepartment(){
var query ="SELECT * FROM department"
connection.query(query, function(err, res){
  console.table(res)
  askEmployees()
})
}

function viewEmployees() {
  var query = "SELECT * FROM employee"
  connection.query(query, function (err, res) {
    console.table(res)
    askEmployees()
  })

}

function viewRoles(){
  var query = "SELECT * FROM roles"
  connection.query(query, function (err,res){
    console.table(res)
    askEmployees()
  })
}


  const employeesQuestions = [
      {
    name: "first_name",
      type: "input",
      message: "What is the persons first name?"
    },
    {
      name: "last_name",
      type:"input",
      message: "What is the persons last name?"
    },
    {
      name: "title",
      type:"input",
      message: "What is the persons title?",
    },
    {
      name: "salary",
      type:"input",
      message: "How much is this person making?",
    },
    {
      name: "name_p",
      type:"input",
      message: "What is the persons department name?", 
    }
    ]
    function askEmployees(){
    inquirer.prompt(employeesQuestions).then(answer => {
      console.table(answer);
        askEmployees();
      })
    }

    askEmployees();

    
