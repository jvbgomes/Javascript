//metodos

//clonar array multidimensional com "deep copy"
// pq nao podemos clonar arrays via variavel?

const arr1 = [[1, 2], 2, 3];

const copiaArray = (arr) => {
    const copia = [];
    arr.forEach((elem) => {
        if (Array.isArray(elem)) {
            copia.push(copiaArray(elem));
        } else {
            copia.push(elem);
        }
    })
    return copia;
}

const arr2 = copiaArray(arr1);

arr1[0][0] = 5;

console.log(arr1);
console.log(arr2)

//filtrar um array e alterar valores específicos
// ex: alterar numeros para strings

const cpfs = ['12323434545', '34658756786', 43254375434, '76547865345', 56768767564];

const result = cpfs.map(cpf => typeof cpf ===  'string' ? cpf : cpf.toString())

console.log(result);

//const result = cpfs.map(cpf => {
//    if (typeof cpf === 'string') {
//        return cpf;
//    } else {
//        return cpf.toString()
//    }
//})
