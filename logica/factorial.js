/*
Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.

spanish: 
Escribe un programa que solicite un número entero n, donde 1 <= n. Resuélvelo mediante recursión.
*/

function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const entrada = prompt("Introduce un numero entero mayor o igual a 1:");
const n = Number(entrada);

if (n < 1 || !Number.isInteger(n)) {
  console.log("Por favor, introduce un numero entero valido mayor o igual a 1: ");
} else {
  console.log(`El factorial de ${n} es ${factorial(n)}`);
}
