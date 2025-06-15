/*
Number divided into halves
 

Given a number, return the number divided into its halves in an array.
 

Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.

Spanish: 
Dado un número, devuelve el número dividido en sus mitades en un array.

Ejemplos:
- `numDiv(4)` debería devolver `[2, 2]`.
- `numDiv(10)` debería devolver `[5, 5]`.

1. Dar un numero
2. Dividir el numero en sus mitades en un array
*/

const numero = parseInt(prompt("Ingresa un número: "));


function numDiv() {
  const mitad = numero / 2;
  return [mitad, mitad];
}

console.log(numDiv(numero));



/*
console.log(numDiv(4));   
console.log(numDiv(10)); 
console.log(numDiv(7));
console.log(numDiv(471));
console.log(numDiv(510));


*/
