-- table for animals
DROP table IF EXISTS `project`.`animals`;
CREATE TABLE `animals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `type` enum('Land','Sea') DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `origin_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `project`.`users` (`id`),
  FOREIGN KEY (`origin_id`) REFERENCES `project`.`origin` (`id`)
);

-- inserting values into the table
INSERT INTO animals (name, weight, price, type, user_id, origin_id)
VALUES 
	  ('lion', 200, 56000, 'Land',1,1),
      ('tiger', 250, 100000, 'Land',2,4),
      ('penguin', 10, 5000, 'Sea',3,5),
      ('gold fish', 1, 10, 'Sea',3,7),
      ('flamingo', 15, 10000000, 'Land',2,3);
      
SELECT * FROM animals;