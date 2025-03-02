DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

\c employees;

CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    CONSTRAINT fk_role_id FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL
    manager_id INT,
    CONSTRAINT fk_manager_id FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);
