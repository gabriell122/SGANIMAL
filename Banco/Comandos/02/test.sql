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



SELECT EXISTS(
    SELECT 
    	1 
    FROM 
    	animais 
    INNER JOIN usuariosAnimais
    	usu_id = dono
    WHERE 
    	ani_nome = nome 
    AND 
    	ani_nasc = nasc 
    AND 
    	ani_especie =  especie 
    AND 
    	ani_sexo = sexo 
    AND 
    	ani_raca = raca
)

-- Select dos animais  asosciado com o usuario
SELECT 
	* 
FROM 
	animais 
WHERE 
	ani_id  
	IN 
    (
       	SELECT 
            ani_id 
        FROM 
            usuariosAnimais 
        WHERE 
            usu_id = dono 
            AND 
      		usa_status = 0      
      ) 


       
	OUT resposta VARCHAR(255)