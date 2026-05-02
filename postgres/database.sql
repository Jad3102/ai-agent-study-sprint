--- Relembrando SQL
-- Criando a tabela
CREATE TABLE usuarios(id SERIAL PRIMARY KEY,nome VARCHAR(100),email VARCHAR(100));

-- Criando um primeiro user e retornando um id de verificação
INSERT INTO usuarios(nome,email) VALUES('Julia Dorneles','melhordevdomundo@gmail.com') RETURNING id;

-- Adicionando mais dois Users
INSERT INTO usuarios(nome,email) VALUES ('Jessé Schulz','amordaminhavida@gmail.com'),('Bernardo Dorneles','irmaozinholindo@gmail.com');

-- SELECT e SELECT com WHERE
SELECT * FROM usuarios;
SELECT nome FROM usuarios WHERE nome='Julia Dorneles';

-- Adicionando um novo usuario
INSERT INTO usuarios(nome,email) VALUES('Jeisa Dorneles','EMAILERRADO@GMAIL.com');

-- Atualizando esse user
UPDATE usuarios SET email = 'maemaisbonitadomundo@gmail.com' WHERE id=4;

-- Deletando um user
DELETE FROM usuarios WHERE id=4;

-- Juntando tabelas
INSERT INTO pedidos (produto, cliente_id) VALUES   ('notebook', 1),  ('mouse', 1),  ('teclado', 2);

SELECT clientes.nome, pedidos.produto FROM clientes LEFT JOIN pedidos on clientes.id = pedidos.cliente_id;