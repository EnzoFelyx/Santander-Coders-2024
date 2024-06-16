//util quando variável possui valores específicos

const permissoes = 'professor'; //pode ser aluno||profesor||admin

switch (permissoes) {
    case 'aluno':
        console.log("Você só pode visualizar as notas");
        break;

    case 'professor':
        console.log("Você pode atribuir notas");
        break;

    case 'admin':
        console.log("Você pode fazer o que quiser chefe!");
        break;

    default:
        console.log("Não sei quem é você");
        break;
}
