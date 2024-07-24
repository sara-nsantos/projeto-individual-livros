CREATE DATABASE IF NOT EXISTS Eyre;

USE Eyre;

CREATE TABLE livros (
  id INT AUTO_INCREMENT,
  livroEscolhido VARCHAR(100),
  caminhoImg VARCHAR(35),
  PRIMARY KEY (id)
)AUTO_INCREMENT=1;

CREATE TABLE usuario (
  id INT AUTO_INCREMENT,
  nome VARCHAR(50),
  email VARCHAR(100) UNIQUE,
  senha VARCHAR(200) UNIQUE, 
  fkLivro INT,
  PRIMARY KEY(id),
  FOREIGN KEY (fkLivro) REFERENCES livros (id)
)AUTO_INCREMENT=1;

INSERT INTO livros (livroEscolhido, caminhoImg) VALUES 
        ('Dom Quixote', './'),
        ('O Pequeno Príncipe', './'),
        ('Harry Potter e a Pedra Filosofal', './'),
        ('O Senhor dos Anéis', './'),
        ('Orgulho e Preconceito', './'),
        ('O Sol é para Todos', './'),
        ('1984', './'),
        ('O Sol é para Todos', './'),
        ('Cem anos de solidão', './'),
        ('Crime e Castigo', './'),
        ('Memórias de Brás Postumas', './');


SELECT * FROM livros;
SELECT * FROM usuario;

select * from usuario order by id desc limit 1;
-- comando para encontrar ultimo user cadastrado

drop database Eyre;
