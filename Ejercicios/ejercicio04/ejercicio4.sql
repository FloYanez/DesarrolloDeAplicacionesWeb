SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema ejercicio4
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ejercicio4` DEFAULT CHARACTER SET utf8 ;
USE `ejercicio4` ;

-- -----------------------------------------------------
-- Table `ejercicio4`.`archivo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ejercicio4`.`archivo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `path` VARCHAR (255) NOT NULL,
  `tamaño` INT NOT NULL,
  `tipo` VARCHAR (20) NOT NULL,
  PRIMARY KEY (`id`)
)ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `ejercicio4`.`medico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ejercicio4`.`medico` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(20) NOT NULL,
  `experiencia` VARCHAR (1000) NOT NULL,
  `especialidad` VARCHAR(20) NOT NULL,
  `foto` INT NOT NULL,
  `email` VARCHAR(100) NULL,
  `celular` VARCHAR(100) NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`foto`) REFERENCES `ejercicio4`.`archivo` (id))
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;