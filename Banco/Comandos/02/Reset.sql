DROP TABLE IF EXISTS usuariosAnimais, animais, usuarios, enderecos;
CREATE TABLE enderecos(
    end_id INT PRIMARY KEY AUTO_INCREMENT,
    end_rua VARCHAR(128) NOT NULL,
    end_num VARCHAR(7) NOT NULL,
    end_bairo VARCHAR(128) NOT NULL,
    end_cidade VARCHAR(128) NOT NULL,
    end_estado VARCHAR(128) NOT NULL
);

CREATE TABLE usuarios(
	usu_id INT PRIMARY KEY AUTO_INCREMENT,
    usu_nome VARCHAR(128) NOT NULL,
    usu_email VARCHAR(128) NOT NULL UNIQUE,
    usu_senha VARCHAR(128) NOT NULL,
    usu_telefone VARCHAR(11) NOT NULL,
    usu_nascimento DATE NOT NULL,
    usu_status TINYINT NOT NULL DEFAULT 0,
    end_id  INT NOT NULL,
    FOREIGN KEY (end_id) REFERENCES enderecos(end_id)
);

CREATE TABLE animais(
	ani_id INT PRIMARY KEY AUTO_INCREMENT,
    ani_nome VARCHAR(128) NOT NULL,
    ani_sexo BIT NOT NULL,
    ani_nasc DATE NOT NULL,
    ani_especie VARCHAR(128) NOT NULL,
    ani_raca VARCHAR(128) NOT NULL,
    ani_status TINYINT NOT NULL DEFAULT 0
);

CREATE TABLE usuariosAnimais(
    usu_id INT NOT NULL,
    ani_id INT NOT NULL,
    usa_status INT DEFAULT 0,
    usa_data DATE NOT NULL,
    FOREIGN KEY (usu_id) REFERENCES usuarios(usu_id),
    FOREIGN KEY (ani_id) REFERENCES animais(ani_id)
);

CREATE PROCEDURE stp_CadastrarAnimal
	@dono 
    @nome 
    @nasc 
    @especie 
    @sexo
    @raca
AS
BEGIN
	INSERT INTO animais(
        IN ani_nome VARCHAR(128), 
        IN ani_nasc DATE, ani_especie VARCHAR(128), 
        IN ani_sexo BIT, 
        IN ani_raca VARCHAR(128)
    ) 
    VALUES( 
        @nome, 
        @nasc, 
        @especie, 
        @sexo, 
        @raca
    );
    INSERT INTO usuariosAnimais( 
        usu_id, 
        ani_id, 
        usa_data
    ) 
    VALUES( 
        @dono, 
        LAST_INSERT_ID(), 
        CURRENT_TIMESTAMP 
    );
END;
DELIMITER //

CREATE PROCEDURE stp_CadastrarAnimal (
    IN dono INT,
    IN nome VARCHAR(128),
    IN nasc DATE,
    IN especie VARCHAR(128),
    IN sexo BIT,
    IN raca VARCHAR(128)
)
BEGIN
    -- Insere o animal na tabela 'animais'
    INSERT INTO animais (ani_nome, ani_nasc, ani_especie, ani_sexo, ani_raca)
    VALUES (nome, nasc, especie, sexo, raca);

    -- Insere o relacionamento na tabela 'usuariosAnimais' usando o ID do último registro inserido
    INSERT INTO usuariosAnimais (usu_id, ani_id, usa_data)
    VALUES (dono, LAST_INSERT_ID(), CURRENT_TIMESTAMP);
END //

DELIMITER ;
DROP PROCEDURE stp_CadastrarAnimal;
CREATE PROCEDURE stp_CadastrarAnimal ()
BEGIN
   SELECT * FROM animais
END 
