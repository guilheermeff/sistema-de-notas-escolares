import system from 'readline-sync'


//Crie um algoritmo que transforme as notas do sistema
//numérico para sistema de notas em caracteres tipo A B C

//* de 90 para cima -   A
//* entre 80 - 89   -   B
//* entre 70 - 79   -   C
//* entre 60 - 69   -   D
//* menor que 60    -   F



function getScore(score) {

    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let finalScore;

    if(scoreA) {
        finalScore = 'A'
    } else if (scoreB){
        finalScore = 'B'
    } else if (scoreC){
        finalScore = 'C'
    } else if (scoreD) {
        finalScore = 'D'
    } else if (scoreF) {
        finalScore = 'F'
    } else {
        finalScore = 'Nota inválida!'
    }

    return finalScore;
}


let score = system.question('Informe a Nota do aluno de 0 até 100: ')
console.log('\n')
console.log('O coeficiente da Nota é: '+ getScore(score))
console.log('\n')