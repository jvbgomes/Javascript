import fs from 'fs';
import path from 'path';
import trateErrors from './errors/functionsError.js';
import { countWords } from './index.js';
import { buildArquiveOutput } from './helpers.js';
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
    .version('0.0.1')
    .option('-t, --text <string>', 'The path of the text file to be analyzed')
    .option('-d, --destination <string>', 'The path of the destination folder to save the results')
    .action((options) => {
        //destructuring para pegar os valores das opções
        const { text, destination } = options;

        if (!text || !destination) {
            console.error(chalk.red('Error: favor insert the origin and the path'));
            program.help();
            return;
        }

        const pathText = path.resolve(text);
        const pathDestination = path.resolve(destination);

        try {
            processArquive(pathText, pathDestination);
            console.log(chalk.green('Process completed successfully'));
        } catch (err) {
            console.log('Ocorred an error in the process:', err);
        }
    })
// parse → analisa os argumentos passados na linha de comando e executa a ação associada à opção selecionada.
program.parse();    

// process.argv → array ['node', 'script.js', ...args], índices 0 e 1 são fixos, úteis a partir do [2]

function processArquive(text, destination) {
    fs.readFile(text, 'utf-8', (err, data) => {
        try {
          if (err) throw err;
            countWords(data);
            const result = countWords(data);
            createAndSaveFile(result, destination);
        } catch (err) {
            trateErrors(err);
        }
    })
}

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