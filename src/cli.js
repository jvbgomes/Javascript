import fs from 'fs';
import trateErrors from './errors/functionsError.js';
import { countWords } from './index.js';

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

async function createAndSaveFile(wordlist, address) {
    const newFile = `${address}/result.txt`;
    const wordText = JSON.stringify(wordlist); 
    try {
        await fs.promises.writeFile(newFile, wordText);
        console.log('File created successfully');
    } catch (err) {
        throw err;
    }

}