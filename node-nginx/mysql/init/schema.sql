use desafiodb;

CREATE TABLE person
(
    id INTEGER AUTO_INCREMENT,
    name TEXT,
    PRIMARY KEY (id)
) COMMENT='this is my test table';


ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password' 

flush privileges