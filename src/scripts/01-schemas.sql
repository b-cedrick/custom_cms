CREATE DATABASE IF NOT EXISTS custom_cms CHARACTER SET utf8 COLLATE utf8_general_ci;

USE custom_cms;

CREATE TABLE IF NOT EXISTS users (
    _id INT AUTO_INCREMENT PRIMARY KEY,
    lasname VARCHAR(120) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    email VARCHAR(40) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS articles (
    _id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    post_date DATE,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;