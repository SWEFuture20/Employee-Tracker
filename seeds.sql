USE cms_db;

INSERT INTO department(name_p)
VALUES ("Hardware"), ("Data"), ("Security")

INSERT INTO roles(title,salary, department_id)
VALUES ("IT SPECAILIST", 50, 1),
       ("SOFTWARE ENGINEER", 32, 2),
       ("CYBERSECURITY ANALYST", 12, 3),
       ("Project Manager", 96, 2),
       ("Director", 96.98, 1),
       ("SECURITY SPECIALIST", 96.55, 3)

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Micheal", "Smith", 1, null),
       ("Spencer", "James", 2, 1),
       ("Rio", "Jean", 3, null),
       ("Riley", "Jones", 1, null),
       ("Jessica", "Johnson", 2, 2),
       ("Brittany", "Rush", 3, 2),
       ("Tiffany", "Wannamaker", 1, 1)
       ("Brandon", "Southmix", 1, 2)

