import inquirer from 'inquirer';
import { QueryResult } from 'pg';
//import { pool, connectToDb } from './connection.js';
import { exit, createDepartment, createEmployee, createRole, viewDepartments, viewEmployees, viewRoles, updateEmployeeRole } from './database.js';



function startCli(): void {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Welcome to employee tracker! What would you like to do?',
        choices: [
          'View departments',
          'View roles',
          'View employees',
          'Add department',
          'Add role',
          'Add employee',
          'Update employee role',
          'Exit',
        ],
      },
    ])
    .then((res) => {
      //switch statement for the different options on inquirer.
      switch (res.action) {
        case 'View departments':
          displayDepartments();
          break;
        case 'View roles':
          displayRoles();
          break;
        case 'View employees':
          displayEmployees();
          break;
        case 'Add department':
          addDepartment();
          break;
        case 'Add role':
          addRole();
          break;
        case 'Add employee':
          addEmployee();
          break;
        case 'Update employee role':
          updateEmployee();
          break;
        default:
          exit();
      }
    });
}

function displayDepartments(): void {
  viewDepartments().then((res: QueryResult) => {
    console.table(res.rows);
    startCli();
  });
}

function displayRoles(): void {
  viewRoles().then((res: QueryResult) => {
    console.table(res.rows);
    startCli();
  });
}

function displayEmployees(): void {
  viewEmployees().then((res: QueryResult) => {
    console.table(res.rows);
    startCli();
  });
}

function addDepartment(): void {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'department_name',
        message: 'Enter the name of the department:',
      },
    ])
    .then((res) => {
      createDepartment(res.department_name).then(() => {
        console.log('Department added!');
        startCli();
      });
    });
}

function addRole(): void {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the role:',
      },
      {
        type: 'number',
        name: 'salary',
        message: 'Enter the salary of the role:',
      },
      {
        type: 'number',
        name: 'department_id',
        message: 'Enter the department id of the role:',
      },
    ])
    .then((res) => {
      createRole(res.title, res.salary, res.department_id).then(() => {
        console.log('Role added!');
        startCli();
      });
    });
}
function addEmployee(): void {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'first_name',
        message: 'Enter the first name of the employee:',
      },
      {
        type: 'input',
        name: 'last_name',
        message: 'Enter the last name of the employee:',
      },
      {
        type: 'input',
        name: 'role_id',
        message: 'Enter role id:'
      },
      {
        type: 'input',
        name: 'manager_id',
        message: 'Enter manager id:'
      }
    ])
    .then((res) => {
      createEmployee(res.first_name, res.last_name, res.role_id, res.manager_id).then(() => {
        console.log('Employee added!');
        startCli();
      });
    }
    );
}

function updateEmployee(): void {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'employee_id',
        message: 'Enter the employee id:',
      },
      {
        type: 'input',
        name: 'role_id',
        message: 'Enter the role id:',
      },
    ])
    .then((res) => {
      updateEmployeeRole(res.employee_id, res.role_id).then(() => {
        console.log('Employee role updated!');
        startCli();
      });
    });
}
startCli();
