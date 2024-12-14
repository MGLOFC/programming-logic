// Mostra um alerta de boas-vindas
alert("Boas vindas ao nosso site!");

// Declaração e atribuição de variáveis
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

// Exibe um alerta de erro
alert("Erro! Preencha todos os campos");

// Declara e exibe uma variável de mensagem de erro
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

// Pergunta o nome do usuário e armazena na variável 'nome'
nome = prompt("Qual é o seu nome?");

// Pergunta a idade do usuário e armazena na variável 'idade'
idade = parseInt(prompt("Digite sua idade:"));

// Verifica se o usuário pode tirar habilitação
if (idade >= 18) {
    alert("Pode tirar a habilitação!");
}
