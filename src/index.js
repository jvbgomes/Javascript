const fs = require('fs'); //importa o modulo 'fs (file system) para ler arquivos do sistema

const arquivePath = process.argv;
const link = arquivePath[2];

// readFile('etc/passwd', (err, data) => {
//    if (err) throw err;
//    console.log(data);    
//});

fs.readFile(link, 'utf-8', (err, data) => {
    breakInLines(data);
    //duplicatedWords(data);
});

//criar um array com as palavras
//contar as ocorrencias
//montar um objeto com o resultado

function breakInLines(data) {
    const lines = data.toLowerCase().split('\n');
    
    const count = lines.flatMap((line) => {
        if (!line) return [];
        return duplicatedWords(line);
    })
    console.log(count);
}

// flatMap = map + flat: transforma cada item e achata o resultado num array só. É mais perfomático.
//ex: [[1, 2], [3, 4]].flatMap(x => x) --> [1, 2, 3, 4]

//expressao regular regex -> /[.,\/#!$%\^&\*;:{}=\-_`~()]/g -> remove os caracteres especiais do texto, deixando apenas as palavras. O 'g' no final indica que a substituição deve ser feita globalmente em todo o texto, e não apenas na primeira ocorrência.

function cleanWords(word) {
    return word.replace(/[/.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function duplicatedWords(data) {
    const wordlist = data.split(' '); //divide o texto em palavras usando o espaco como separador;
    const result = {};
    // object[property] = value;
    wordlist.forEach(word => {
        if (word.length >= 3) {
            const cleanWord = cleanWords(word);
            result[cleanWord] = (result[cleanWord] || 0) + 1; 
        }
        //se a palavra ja existir no objeto, pega o valor atual e soma 1, se nao, cria um novo com 0.
    })
    return result;
}

// process.argv é um array que contém os argumentos passados para o processo Node.js. O primeiro elemento é o caminho para o executável do Node.js, o segundo elemento é o caminho para o arquivo JavaScript que está sendo executado, e os elementos subsequentes são os argumentos adicionais passados para o script.