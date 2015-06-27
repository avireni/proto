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
