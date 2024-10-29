-- Automatiza o cadastro de animais e asoscia ele ao seu dono
DELIMITER $$
CREATE PROCEDURE `stp_CadastrarAnimal`(
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
END$$
DELIMITER ;
-- DROP 
DROP PROCEDURE IF EXISTS `stp_CadastrarAnimal`;




-- Adotar animal
DELIMITER $$
CREATE PROCEDURE stp_AnimaisAdotar(
 IN aniId INT,
 IN lestId INT,
 IN newId INT
 )
BEGIN
	-- Desassocia o antigo dono do animal
	UPDATE usuariosAnimais SET usa_status = 1 WHERE ani_id = aniId AND usu_id = lestId;
    -- Associa o novo dono ao animal
    INSERT INTO usuariosAnimais( usu_id, ani_id, usa_data) VALUES( newId, aniId, CURRENT_TIMESTAMP );
    -- Tira o animal da doação
    UPDATE animais SET ani_status = 0 WHERE ani_id = aniId;
END $$
DELIMITER


-- Drop Usuarios Cadastro
DROP PROCEDURE `stp_CadastrarUsuarios`;
-- Cadastro de Usuarios
DELIMITER $$
CREATE PROCEDURE `stp_CadastrarUsuarios`(
    IN rua VARCHAR(128),
    IN num VARCHAR(7),
    IN bairo VARCHAR(128),
    IN cidade VARCHAR(128),
    IN estado VARCHAR(128),
    IN nome VARCHAR(128),
    IN email VARCHAR(128),
    IN senha VARCHAR(128),
    IN telefone VARCHAR(111),
    IN nasc DATE,
	OUT resposta VARCHAR(255)
)
BEGIN
    -- Verifica se o Email existe
	IF EXISTS(SELECT 1 FROM usuarios WHERE usu_email = email) THEN
    	SET resposta = false;
    ELSE
        -- Faz o cadastro do Endereço
    	INSERT INTO 
        	enderecos( end_rua, end_num, end_bairo, end_cidade, end_estado) 
        VALUES 
        	( rua, num, bairo, cidade, estado );
        -- Faz o cadastro do Usuario
        INSERT INTO 
        	usuarios( usu_nome, usu_email, usu_senha, usu_telefone, usu_nascimento, end_id) 
        VALUES ( nome, email, senha, telefone, nasc, LAST_INSERT_ID() );
    	SET resposta = true;
	END IF;
END$$
DELIMITER ;