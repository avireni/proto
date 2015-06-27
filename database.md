CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(25) NOT NULL DEFAULT '',
  `lastname` varchar(25) NOT NULL DEFAULT '',
  `email` varchar(50) NOT NULL DEFAULT '',
  `username` varchar(15) NOT NULL DEFAULT '',
  `password` varchar(15) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

CREATE TABLE `ivrecords` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ptName` varchar(50) NOT NULL,
  `ptRoom` int(11) NOT NULL,
  `ivMix` varchar(100) NOT NULL,
  `ivDate` date NOT NULL,
  `ivTime` time NOT NULL,
  `drugMfr` varchar(100) NOT NULL DEFAULT '',
  `drugLot` varchar(25) NOT NULL DEFAULT '',
  `drugExp` date NOT NULL,
  `diluent` varchar(100) NOT NULL DEFAULT '',
  `dilMfr` varchar(100) NOT NULL DEFAULT '',
  `dilLot` varchar(25) NOT NULL DEFAULT '',
  `dilExp` date NOT NULL,
  `qty` int(11) NOT NULL,
  `prepBy` varchar(50) NOT NULL DEFAULT '',
  `userid` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`),
  CONSTRAINT `ivrecords_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;



INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `username`, `password`)
VALUES
	(1, 'Demo', 'Demo', 'demo@gmail.com', 'Demo', 'demo'),
	(2, 'Demo2', 'Demo2', 'demo2@gmail.com', 'Demo2', 'demo2'),
	(3, 'Test', 'test', 'test@gmail.com', 'Test', 'test');



	INSERT INTO `ivrecords` (`id`, `ptName`, `ptRoom`, `ivMix`, `ivDate`, `ivTime`, `drugMfr`, `drugLot`, `drugExp`, `diluent`, `dilMfr`, `dilLot`, `dilExp`, `qty`, `prepBy`, `userid`)
VALUES
	(1, 'John Abr', 32, 'Amoxicillin', '2015-03-12', '12:35:00', 'Actavis', '0379', '2017-12-12', 'Lactose', 'Novatel', 'A345', '2017-03-24', 23, 'Amanda', 1),
	(2, 'Maria Lopez', 45, 'Clindamycin', '2015-03-15', '04:45:00', 'Mylan Inc.', 'MJ237', '2016-12-11', 'Cellulose', 'Onyx Pharma', 'O982', '2017-06-12', 40, 'Keith', 1),
	(3, 'Melinda', 21, 'Cefuroxime', '2015-03-16', '01:45:00', 'Pfizer Inc', 'PF234', '2017-01-01', 'Stearate', 'Bristol-Myers', 'BM67', '2016-04-27', 10, 'Chris', 2),
	(4, 'Peter S', 17, 'Pabrinex', '2015-04-03', '15:20:00', 'Flamel Tech', 'F2651', '2017-06-20', 'Nacl', 'Synthon Ph', 'S7254', '2017-01-01', 17, 'Amanda', 3),
	(5, 'Chelsea', 22, 'Furosemide', '2015-04-01', '02:15:00', 'Cardinal Health', 'C3498', '2016-04-20', 'Ampuole', 'Purdue Pharma', 'P1987', '2016-07-30', 25, 'Naina', 2),
	(6, 'Mary S', 16, 'Tigecycline', '2015-04-04', '13:10:00', 'Impax Labs', 'IM723', '2017-01-12', 'Lactose', 'Zila Inc', 'ZI631', '2016-05-15', 10, 'Keith', 3);
