const fatorial = function f(num) {
    if (num === 0 || num === 1) return 1;
    return num * f(num - 1);
}

// 5 * fatorial(4) -> 5 * (4 * factorial(3)) -> 5 * (4 * (3 * factorial(2))) -> 5 * (4 * (3 * (2 * factorial(1)))) -> 5 * (4 * (3 * (2 * 1))) -> 120

console.log(fatorial(5)); // 120    
console.log(fatorial(0)); // 1
console.log(fatorial(1)); // 1
console.log(fatorial(7)); // 5040