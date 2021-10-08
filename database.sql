CREATE DATABASE blog;

USE blog;

CREATE TABLE users (
  id VARCHAR(40),
  name VARCHAR(255) NOT NULL,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(150) NOT NULL,
  CONSTRAINT USR_PK_id PRIMARY KEY (id),
  CONSTRAINT USR_UQ_username UNIQUE(username),
  CONSTRAINT USR_UQ_email UNIQUE(email)
);

CREATE TABLE programming_languages (
  id VARCHAR(40),
  name VARCHAR(255) NOT NULL,
  released_year INT NOT NULL,
  github_rank INT NOT NULL,
  CONSTRAINT PLE_PK_id PRIMARY KEY (id),
  CONSTRAINT PLE_UQ_name UNIQUE(name)
);

-- Register a user example
INSERT INTO users(id, name, username, email) VALUES (
  UUID(),
  'Anne Ballard',
  'anne12',
  'ritraabu@dindifo.al'
);

INSERT INTO programming_languages(id, name, released_year, github_rank) VALUES
('609ad5cb-23b4-11ec-aaf4-b05cda924663','JavaScript','1995','1'),
('609b797d-23b4-11ec-aaf4-b05cda924663','Python','1991','2'),
('609b8e6c-23b4-11ec-aaf4-b05cda924663','Java','1995','3'),
('609b9050-23b4-11ec-aaf4-b05cda924663','TypeScript','2012','7'),
('609b91bc-23b4-11ec-aaf4-b05cda924663','C#','2000','9'),
('609b92ef-23b4-11ec-aaf4-b05cda924663','PHP','1995','8'),
('609b942d-23b4-11ec-aaf4-b05cda924663','C++','1985','5'),
('609b956f-23b4-11ec-aaf4-b05cda924663','C','1972','10'),
('609b9660-23b4-11ec-aaf4-b05cda924663','Ruby','1995','6'),
('609b9774-23b4-11ec-aaf4-b05cda924663','R','1993','33'),
('609b987c-23b4-11ec-aaf4-b05cda924663','Objective-C','1984','18'),
('609b9a13-23b4-11ec-aaf4-b05cda924663','Swift','2015','16'),
('609b9b0b-23b4-11ec-aaf4-b05cda924663','Kotlin','2011','15'),
('609b9bdd-23b4-11ec-aaf4-b05cda924663','Go','2009','4'),
('609b9cff-23b4-11ec-aaf4-b05cda924663','Rust','2010','14'),
('609b9dd9-23b4-11ec-aaf4-b05cda924663','Scala','2004','11');
