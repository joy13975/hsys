CREATE TABLE experiences(
	id INT AUTO_INCREMENT,
	personnel_id INT NOT NULL,
	case_start DATE NOT NULL,
	case_end DATE NOT NULL,
	case_name VARCHAR(128) NOT NULL,
	case_desc TEXT NOT NULL,
	cb_req_def BOOLEAN NOT NULL,
	cb_basic_design BOOLEAN NOT NULL,
	cb_detailed_design BOOLEAN NOT NULL,
	cb_programming BOOLEAN NOT NULL,
	cb_unit_test BOOLEAN NOT NULL,
	cb_helpdesk BOOLEAN NOT NULL,
	task_other VARCHAR(256) NOT NULL,
	total_scale INT NOT NULL,
	team_scale INT NOT NULL,
	os VARCHAR(512) NOT NULL,
	proglang_tools VARCHAR(512) NOT NULL,
	dbms VARCHAR(512) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (personnel_id) 
		REFERENCES personnel(id)
		ON DELETE CASCADE
);