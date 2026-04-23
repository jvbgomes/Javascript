const agora = new Date();

console.log(agora);

console.log('Ano:',agora.getFullYear());
console.log('Mês 0-11:',agora.getMonth());
console.log('Dia:',agora.getDate());
console.log('Hora:',agora.getHours());
console.log('Minutos:',agora.getMinutes());
console.log('Segundos:',agora.getSeconds());

const nascimento = new Date('2005-06-16T08:30:00');

console.log(nascimento);

console.log('Data formatada (BR):', nascimento.toLocaleDateString('pt-BR'));
console.log('Data formatada (US):', nascimento.toLocaleDateString('en-US'));