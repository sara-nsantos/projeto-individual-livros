var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
    SELECT usuario.*, livros.caminhoImg FROM usuario 
    JOIN livros ON livros.id = usuario.fkLivro WHERE email = '${email}' AND senha = SHA2('${senha}',224);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
    //  ATRAVÉS DA VAR QUE FOI PRO JSON E VIROU OBJ (QUADROS), ADD NA QUERY DO BANCO - PROF. RAFA
    //  CRIPTOGRAFIA NA SENHA ENSINADO PELA PROF VIVIAN - BANCO DE DADOS
function cadastrar(nome, email, senha, quadros) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, quadros);
    var instrucao = `
        INSERT INTO usuario (nome, email, senha, fkLivro) VALUES ('${nome}', '${email}', SHA2('${senha}',224), ${quadros});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
    //  PRECISEI CRIAR UMA NOVA FUNÇÃO... PARA CONSEGUIR PEGAR OS DADOS DO BANCO E PLOTAR NO GRAF, SO......
    //  PELAS VARIÁVEIS DE SESSÃO EU PUXEI OS VALORES, CONTEI, AGRUPEI E PLOTEI TUDO NO GRÁFICO. - AULAS DE PI & BD
function plotargrafico() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function plotargrafico():");
    var instrucao = `
    SELECT COUNT(usuario.id) as qtd , fkLivro, quadroPreferido from usuario join 
    quadros on quadros.id = fkLivro group by fkLivro
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
    //  EXPORTEI A FUNÇÃO - SEGUINDO O MODELO DA API...
module.exports = {
    entrar,
    cadastrar,
    listar,
    plotargrafico
};