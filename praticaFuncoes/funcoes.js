// function


//elevar um numero x a uma potencia y

function calculoPotencia(num, pow) {
    let result = 1;
    for (let i = 1; i < pow; i++) {
        result *= num;
    }
    return result;
}

calculoPotencia(2, 3); // 8
calculoPotencia(3, 4); // 81
calculoPotencia(5, 2); // 25
console.log(`O resultado é ${calculoPotencia(2, 3)}`);
console.log(`O resultado é ${calculoPotencia(3, 4)}`);
console.log(`O resultado é ${calculoPotencia(5, 2)}`);

//////////////////////////////////////////////////////////////////////////