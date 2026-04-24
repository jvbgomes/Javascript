const fs = require('fs'); //importa o modulo 'fs (file system) para ler arquivos do sistema

const arquivePath = process.argv;
const link = arquivePath[2];

// readFile('etc/passwd', (err, data) => {
//    if (err) throw err;
//    console.log(data);    
//});

fs.readFile(link, 'utf-8', (err, data) => {
    duplicatedWords(data);
});

//criar um array com as palavras
//contar as ocorrencias
//montar um objeto com o resultado

function duplicatedWords(data) {
    const wordlist = data.split(' '); //divide o texto em palavras usando o espaco como separador;
    const result = {};
    // object[property] = value;
    wordlist.forEach(word => {
        result[word] = (result[word] || 0) + 1; //se a palavra ja existir no objeto, pega o valor atual e soma 1, se nao, cria um novo com 0.
    })
    console.log(result);
}

// process.argv é um array que contém os argumentos passados para o processo Node.js. O primeiro elemento é o caminho para o executável do Node.js, o segundo elemento é o caminho para o arquivo JavaScript que está sendo executado, e os elementos subsequentes são os argumentos adicionais passados para o script.