var nomeDoAluno = "Enzo Felix dos Santos"; //string
var idade = 22; // number

var alturaDoAula = 1.95; //number 
var estudando = true; //boolean

console.log(typeof nomeDoAluno, nomeDoAluno)
console.log(typeof idade, idade)
console.log(typeof alturaDoAula, alturaDoAula)
console.log(typeof estudando, estudando)

var semConteudo

console.log(semConteudo) //undefined

var curso = 'Front-End em React', topico = 'JavaScript Básico I';

console.log(curso, topico);


// ! O var é antiquado, use let ou const


let notaDoAluno = 10;
const mediaDoAluno = 8;

notaDoAluno = 9;

/* mediaDoAluno = 5; */ //não é permitido, pois a const não permite alterar o valor já atribuido

console.log(notaDoAluno)