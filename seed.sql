\c employees

INSERT INTO department (id, name) VALUES
    (1, 'Engineering'),
    (2, 'Sales'),
    (3, 'Marketing'),
    (4, 'Finance');

INSERT INTO role (id, title, salary, department_id) VALUES
    (1, 'Software Engineer', 100000, 1),
    (2, 'Sales Manager', 120000, 2),
    (3, 'Marketing Manager', 110000, 3),
    (4, 'Finance Manager', 130000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('Lee', 'Obungen', 1, NULL),
    ('Michael', 'Obungen', 2, 2),
    ('Nou', 'Thao', 3, 3),
    ('Melissa', 'Yang', 4, 4);