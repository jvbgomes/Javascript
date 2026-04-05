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

// criar um fluxo que identifica o tipo de pessoa usuária e comunica de acordo.
// ex: pessoa usuária free tem acesso limitado ao app
//     pessoa usuária premium tem acesso a todas as funções
//     pessoa usuária super premium tem acesso total e bônus especiais

const tipoUsuario = 'Premium';

function verificarTipoUsuario(tipoUsuario) {
    switch (tipoUsuario) {
        case 'Free':
            console.log('Você é um usuário free. Você só tem acesso a 12 funções do nosso app. Considere fazer um upgrade para premium para aproveitar mais recursos!');
            break;
        case 'Premium':
            console.log('Você é um usuário premium. Você tem acesso ilimitado a todas as funções do nosso app. Aproveite ao máximo os recursos disponíveis! Se você quiser poderá ter ainda mais benefícios, considere assinar o plano Pro!');
            break;
        case 'Pro':
            console.log('Você é um usuário Pro. Você tem acesso total a todas as funções do nosso app, além de bônus especiais e suporte prioritário. Agradecemos por ser um usuário tão valioso!');
            break;    
        default:
            console.log('Tipo de usuário desconhecido. Por favor, verifique seu plano e tente novamente.');
            break;     
    }
}

verificarTipoUsuario(tipoUsuario);