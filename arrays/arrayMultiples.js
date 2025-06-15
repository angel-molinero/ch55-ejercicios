/*
Array of Multiples
Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.

spanish: 
Crea una función que tome dos parámetros (número, longitud) y devuelva una matriz de longitud que contenga múltiplos del número.
Ejemplos:
- `arrayMultiplos(2, 10)` debería devolver `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` debería devolver `[17, 34, 51, 68, 85, 102]`.
*/

function arrayMultiples(number, length) {
  const resultado = [];
  for (let i = 1; i <= length; i++) {
    resultado.push(number * i); // el metodo .push agrega uno o mas elementos al final de un arreglo, en eeste caso calcula la multiplicacion del numero con el numero del iterador i y entrega el resultado al final del arreglo
  }
  return resultado;
}


console.log(arrayMultiples(2, 10));  
console.log(arrayMultiples(17, 6));
console.log(arrayMultiples(9,15));
console.log(arrayMultiples(4,20));


