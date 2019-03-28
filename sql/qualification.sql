CREATE TABLE qualification(
	id INT AUTO_INCREMENT,
	personnel_id INT NOT NULL,
	qual_name VARCHAR(128) NOT NULL,
	qual_date DATE NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (personnel_id) 
		REFERENCES personnel(id)
		ON DELETE CASCADE
);