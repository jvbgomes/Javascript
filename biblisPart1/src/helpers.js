function filterOcorrences(line) {
    return Object.keys(line).filter(key => line[key] > 1);
}

function buildArquiveOutput(wordlist) {
    let finalText = '';
    wordlist.forEach((line, index) => {
        const duplicated = filterOcorrences(line).join(', ');
        finalText += `doppleganger words in the line ${index + 1} : ${duplicated}\n`;
    });
    return finalText;
}

export { buildArquiveOutput }