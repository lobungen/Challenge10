import inquirer from 'inquirer';
import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection.js';
import { createDepartment, createEmployee, createRole, viewDepartments, viewEmployees, viewRoles, updateEmployeeRole } from './database.js';

await connectToDb();

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
          pool.end();
          process.exit(0);
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

