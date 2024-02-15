create table usuario(
	usu_id INT PRIMARY KEY AUTO_INCREMENT,
    usu_nome VARCHAR(128) NOT NULL,
    usu_email VARCHAR(128) NOT NULL UNIQUE,
    usu_senha VARCHAR(128) NOT NULL
);
CREATE TABLE animal(
	ani_id INT PRIMARY KEY AUTO_INCREMENT,
    usu_id INT NOT NULL,
    ani_nome VARCHAR(128) NOT NULL,
    ani_nasc DATE NOT NULL,
    ani_especie VARCHAR(128) NOT NULL,
    FOREIGN KEY (usu_id) REFERENCES usuario(usu_id)
);