const fs = require('fs'); //importa o modulo 'fs (file system) para ler arquivos do sistema
const trateErrors = require('./errors/functionsError');

// process.argv → array ['node', 'script.js', ...args], índices 0 e 1 são fixos, úteis a partir do [2]
const arquivePath = process.argv;
const link = arquivePath[2];

fs.readFile(link, 'utf-8', (err, data) => {
    try {
        if (err) throw err;
        countWords(data);
    } catch (err) {
        trateErrors(err);
    }
}); 

// flatMap = map + flat: transforma cada item e achata o resultado num array só. É mais perfomático.
//ex: [[1, 2], [3, 4]].flatMap(x => x) --> [1, 2, 3, 4]

function countWords(data) {
    const lines = extractLines(data);
     const count = lines.flatMap((line) => {
        if (!line) return [];
        return duplicatedWords(line);
    })
    console.log(count);
}

function extractLines(data) {
    return data.toLowerCase().split('\n');
}

//expressao regular regex -> /[.,\/#!$%\^&\*;:{}=\-_`~()]/g -> remove os caracteres especiais do texto, deixando apenas as palavras. O 'g' no final indica que a substituição deve ser feita globalmente no texto.

function cleanWords(word) {
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function duplicatedWords(data) {
    const wordlist = data.split(' '); //divide o texto em palavras usando o espaco como separador.
    const result = {};
    wordlist.forEach(word => {
        if (word.length >= 3) {
            const cleanWord = cleanWords(word);
            result[cleanWord] = (result[cleanWord] ?? 0) + 1; 
            // ?? é um operador de coalescência nula que retorna o valor à direita (0) se o valor à esquerda for null ou undefined.
        }
        //se a palavra ja existir no objeto, pega o valor atual e soma 1, se nao, cria um novo com 0.
    })
    return result;
}