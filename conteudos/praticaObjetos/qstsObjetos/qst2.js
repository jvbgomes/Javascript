const config = {
    tema: "escuro",
    notificacoes: true,
    idioma: "pt-BR",
};

console.log(config);

console.log(`Tema: ${config.tema}`);

console.log(`Notificações: ${config['notificacoes']}`);

const chave = 'idioma';
console.log(`Idioma: ${config[chave]}`);