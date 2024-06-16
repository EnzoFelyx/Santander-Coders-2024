const prompt = require('readline-sync')

const idade = Number(prompt.question("Qual e a sua idade:"));

const ehMaiorDeIdade = idade >=18;

if(ehMaiorDeIdade){
    console.log("O usuário é maior de idade")
}
else{
    console.log("O usuário é menor de idade.")
}


const mediaDoAluno = 6;

if (mediaDoAluno >= 7){
    console.log("Aprovado!");
}
else if(mediaDoAluno >= 5){
    console.log("Prova final!");
}
else {
    console.log("Reprovado!");
}

const idadeDaPessoa = 19;
const temCNH = false;

if (idadeDaPessoa >= 18 && temCNH){
    console.log("Você pode dirigir!")
}
else{
    console.log("Você não pode dirigir!");
}