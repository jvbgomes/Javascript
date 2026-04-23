const tarefas = ['Lavar a louça', 'Estudar EDB', 'Academia', 'Jiu Jitsu', 'Escovar os dentes'];

//push adiciona um elemento no final
tarefas.push('Dormir cedo');

console.log(tarefas);

//unshift() - adiciona um elemento no início
tarefas.unshift('Acordar cedo');

//pop remove o ultimo elemento do array
tarefas.pop();

console.log(tarefas); 

//shift remove o primeiro elemento do array
tarefas.shift();

console.log(tarefas);
