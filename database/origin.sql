-- table for origin of the user or the animal	
DROP table  `project`.`origin`;
CREATE TABLE `origin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `origin` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- inserting values into the table 
INSERT INTO origin (origin)
VALUES 
	  ('Asia'),
      ('Australia'),
      ('Antartica'),
      ('Afria'),
      ('Europe'),
      ('North America'),
      ('South America');


SELECT * FROM origin;