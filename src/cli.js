import fs from 'fs';
import trateErrors from './errors/functionsError.js';
import { countWords } from './index.js';

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
}) 