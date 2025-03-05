import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection.js';

function createDepartment (department_name) {
  const sql = `INSERT INTO departments (department_name)
    VALUES ($1)`;
  const params = [department_name];

  return pool.query(sql, params);
}

function createEmployee (first_name, last_name, role_id, manager_id) {
  const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES ($1, $2, $3, $4)`;
  const params = [first_name, last_name, role_id, manager_id];

  return pool.query(sql, params);
}

function createRole (title, salary, department_id) {
    const sql = `INSERT INTO roles (title, salary, department_id)
        VALUES ($1, $2, $3)`;
    const params = [title, salary, department_id];
    
    return pool.query(sql, params);
}

function viewDepartments () {
  const sql = `SELECT * FROM departments`;

    return pool.query(sql);
}

function viewEmployees () {
  const sql = `SELECT * FROM employees`;

    return pool.query(sql);
}

function viewRoles () {
  const sql = `SELECT * FROM roles`;

    return pool.query(sql);
}

function updateEmployeeRole (employee_id, role_id) {
  const sql = `UPDATE employees
    SET role_id = $2
    WHERE id = $1`;
  const params = [employee_id, role_id];

  return pool.query(sql, params);
}

export { createDepartment, createEmployee, createRole, viewDepartments, viewEmployees, viewRoles, updateEmployeeRole };