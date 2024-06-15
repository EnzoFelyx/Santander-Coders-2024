const prompt = require('readline-sync');

const idade = prompt.question("Qual e a sua idade?")

console.log("A idade do usuário é de: ", idade);

console.log(idade, typeof idade);

console.log(Number("X"))

console.log(String(10), typeof String(10));

console.log(Boolean(-1));

// Coerção implícita

console.log(1 + "1"); // na soma o javascript corrigi para string e concatena
console.log(10 - "5"); // na subtração ele prioriza o number e subtrai pela string.

