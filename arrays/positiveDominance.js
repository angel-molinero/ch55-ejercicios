/*
Positive dominance in Array
Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.

spanisch: 
Escriba una función para determinar si un array es dominante positiva.
Un array es dominante positiva cuando la mayoría de sus elementos son positivos.

Ejemplo:
- `positiveDom([-1, -3, -5, 4, 6767])` debería devolver `false`.
*/


function positiveDominance(array) { //aray es el paremetro que recibe
  let positivos = 0; // variable para contar los positivos

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positivos++; //si el numero es positivo se le agrega 1 al contador de positivos
    }
  }

  return positivos > array.length / 2; //operacion para verificar si hay mas positivos en la mitad del arreglo
}

console.log(positiveDominance([-1, -3, -5, 4, 6767])); 
console.log(positiveDominance([1, -2, 3, 4]));        
console.log(positiveDominance([0, -1, -2, 2, 3]));    
console.log(positiveDominance([-1, -2, -3, -4]));     
