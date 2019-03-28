CREATE TABLE personnel(
	id INT AUTO_INCREMENT,
	lastname_kanji VARCHAR(64) NOT NULL,
	firstname_kanji VARCHAR(64) NOT NULL,
	lastname_furigana VARCHAR(128) NOT NULL,
	firstname_furigana VARCHAR(128) NOT NULL,
	lastname_eng VARCHAR(128) NOT NULL,
	firstname_eng VARCHAR(128) NOT NULL,
	employer VARCHAR(128) NOT NULL,
	birthdate DATE NOT NULL,
	gender VARCHAR(16) NOT NULL,
	zipcode INT NOT NULL,
	address2 VARCHAR(128) NOT NULL,
	address3 VARCHAR(128) NOT NULL,
	train VARCHAR(64) NOT NULL,
	station VARCHAR(64) NOT NULL,
	degree VARCHAR(128) NOT NULL,
	graduation DATE NOT NULL,
	last_update TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);