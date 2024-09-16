DROP DATABASE IF EXISTS codeando;
CREATE DATABASE IF NOT EXISTS codeando;
USE codeando;

CREATE TABLE IF NOT EXISTS posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  message TEXT NOT NULL,
  userId INT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  username VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
  idUser INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);