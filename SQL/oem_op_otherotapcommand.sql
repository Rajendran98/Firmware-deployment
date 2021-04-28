-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: oem_op
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `otherotapcommand`
--

DROP TABLE IF EXISTS `otherotapcommand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `otherotapcommand` (
  `DeviceID` varchar(100) NOT NULL,
  `DeviceType` varchar(100) NOT NULL,
  `Customer` varchar(100) NOT NULL,
  `NetworkProvider` varchar(100) NOT NULL,
  `MobileNo` int NOT NULL,
  `VehicleTypeName` bigint NOT NULL,
  `Model` varchar(100) NOT NULL,
  `CurrentCVersion` int NOT NULL,
  `CurrentJavaVersion` int NOT NULL,
  `Ignition` varchar(100) NOT NULL,
  PRIMARY KEY (`DeviceID`),
  KEY `VehicleTypeName_idx` (`VehicleTypeName`),
  KEY `CurrentCVersion_idx` (`CurrentCVersion`),
  KEY `CurrentJavaVersion_idx` (`CurrentJavaVersion`),
  CONSTRAINT `CurrentCVersion` FOREIGN KEY (`CurrentCVersion`) REFERENCES `firmwaredetailc` (`ID`),
  CONSTRAINT `CurrentJavaVersion` FOREIGN KEY (`CurrentJavaVersion`) REFERENCES `firmwaredetailjava` (`ID`),
  CONSTRAINT `VehicleTypeName` FOREIGN KEY (`VehicleTypeName`) REFERENCES `vehicletype` (`VehicleTypeID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `otherotapcommand`
--

LOCK TABLES `otherotapcommand` WRITE;
/*!40000 ALTER TABLE `otherotapcommand` DISABLE KEYS */;
INSERT INTO `otherotapcommand` VALUES ('FF353196','TAP66','ram','network',786458976,1,'m21',1,1,'off'),('FF947977','TAP66','sri','wireless',786458976,2,'m22',114,114,'on'),('NG356545','TAP76','xyz','network',976549076,2,'m26',115,115,'on'),('NG499390','TAP76','abc','wireless',976549067,2,'m26',116,114,'on'),('SNM00030','SNM476','dfg','net',987560983,1,'m20',115,115,'off'),('SNM00032','SNM476','ram','net',789507458,1,'m25',116,115,'off');
/*!40000 ALTER TABLE `otherotapcommand` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-28 11:48:34
