import fs from 'fs';
import trateErrors from './errors/functionsError.js';
import { countWords } from './index.js';
import { buildArquiveOutput } from './helpers.js';

// process.argv → array ['node', 'script.js', ...args], índices 0 e 1 são fixos, úteis a partir do [2]
const arquivePath = process.argv;
const link = arquivePath[2];
const address = arquivePath[3];

fs.readFile(link, 'utf-8', (err, data) => {
    try {
      if (err) throw err;
        countWords(data);
        const result = countWords(data);
        createAndSaveFile(result, address);
    } catch (err) {
        trateErrors(err);
    }
})
//O objeto promises do fs permite usar a sintaxe async/await para lidar com operações assíncronas de forma mais legivel
async function createAndSaveFile(wordlist, address) {
    const newFile = `${address}/result.txt`;
    const wordText = buildArquiveOutput(wordlist);
    try {
        await fs.promises.writeFile(newFile, wordText);
        console.log('File created successfully');
    } catch (err) {
        throw err;
    }
}

//o metodo async/await é mais simplificado e legivel --> de sincrono para assincrono mais facilmente
//o metodo then/catch é mais verboso, mas pode ser mais flexivel em alguns casos, como quando se tem varias operações assíncronas encadeadas.

//function createAndSaveFile(wordlist, address) {
//    const newFile = `${address}/result.txt`;
//    const wordText = JSON.stringify(wordlist); 
//    
//    fs.promises.writeFile(newFile, wordText)
//    .then(() => {
//        console.log('File created successfully');    
//    })
//    .catch((err) => {
//        throw err;
//    })
//    .finally(() => console.log('Operation completed'));
//    
//}