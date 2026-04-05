// Verificar se estudante receberá bônus na nota.
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas. 

const nome = 'João';
const nota = 9.3;
const faltas = 0;

const recebeBonus = (nota >= 8 && faltas <= 2) ? 'Recebe bônus' : 'Não recebe bônus';

console.log(recebeBonus);

switch (recebeBonus) {
    case 'Recebe bônus':
        console.log('Parabéns! Você recebeu um bônus na sua nota.');
        break;
    default:
        console.log('Infelizmente, você não recebeu um bônus na sua nota.');
        break;    
}

