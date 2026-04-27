// flatMap = map + flat: transforma cada item e achata o resultado num array só. É mais perfomático.
//ex: [[1, 2], [3, 4]].flatMap(x => x) --> [1, 2, 3, 4]

function countWords(data) {
    const lines = extractLines(data);
     const count = lines.flatMap((line) => {
        if (!line) return [];
        return verifyDuplicatedWords(line);
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

function verifyDuplicatedWords(data) {
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