-- table for users who have different collections of animals
DROP table IF EXISTS `project`.`users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `dateOfBirth` date DEFAULT NULL,
	
  PRIMARY KEY (`id`)
);

-- inserting values into the table
INSERT INTO users (first_name, last_name, username, password, email, dateOfBirth)
VALUES 
	  ('Edward', 'Scissorhands', 'edward', 'p@ssw0rd', 'abc@xy.com', '2008-7-04'),
      ('Biby', 'Pops', 'biby', 'p@ssw0rd', 'agrc@xyz.com', '2008-7-04'),
      ('Sack', 'Nost', 'sack', 'p@ssw0rd', 'aerbc@xyz.com', '2008-7-04');

      

SELECT * FROM users;