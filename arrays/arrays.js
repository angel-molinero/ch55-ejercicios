/*
Sum of Resistors in Series
 
Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values are positive.

1. un array de resistencias
2. usando Math.abs obtener el valor absoluto de los elementos del array
    2.1 usar map para sacar todos los valores absolutos
3. reduce, usar ciclos para hacer la suma
4. retornar un mensaje del tipo "15 ohms"

*/

//escribiendo la firma 

function sumOfResistors(resistorsArray){
    // el punto 2.1, const para crear una variable y le nombramos como queramos, esta variable sera un arreglo. 
    // le damos el valor del arreglo resistorsArray y usando el metodo de los arrays.map agregamos como argumento una funcion flecha y metodo de la biblioteca math 
    const resistorAbs = resistorsArray.map((resistor) => Math.abs(resistor));
    const totalResisance = resistorAbs.reduce((total,current) => total + current,0);
    return `${totalResisance} ohms`
}

console.log(sumOfResistors([-1, 5, -6, 3, -9]));
console.log(sumOfResistors([-1,5,6,3]));
console.log(sumOfResistors([14,3.5,6]));
console.log(sumOfResistors([8,15,100]));


