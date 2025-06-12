/*
Reto de programación: FizzBuzz
Descripcion:

Escribe un programa que recorre los números del 1 al 100 y aplique las sigueintes reglas:

Si el número es múltiplo de 3, imprime "Fizz".
Si el número es múltiplo de 5, imprime "Buzz".
Si el número es múltiplo de 3 y 5, imprime "FizzBuzz".
Si no es múltiplo de ninguno, imprime el número tal cual

1. 100 numeros
2. crear un bucle que recorra 100 numeros
3. Si el número es múltiplo de 3, imprime "Fizz".
    3.1 Ocupar la expresion numero % 3 
    3.2 es verdadero si el modulo es = 0

4. Si el número es múltiplo de 5, imprime "Buzz".
    4.1 ocupar la expresion numero % 5
    4.2 es verdadero si el modulo es = 0

5. Si el número es múltiplo de 3 y 5, imprime "FizzBuzz".
    5.1 ocupar la expresion modulo % 3 y mdulo % 5
    5.2 es verdadero solo y solo si ambas expresiones son = 0

6.En caso de no ser multiplo de niguno imprime el numero
*/

let counter = 1;
do {
    if (counter % 3 === 0 && counter % 5 === 0) {
        console.log(`El número ${counter} es FizzBuzz`);
    } else if(counter % 3 === 0){
        console.log(`El número ${counter} es Fizz`);    
    } else if(counter % 5 === 0){
        console.log(`El número ${counter} es Buzz`); 
    } else{
        console.log(counter);
    }
    counter++;

} while (counter <= 100);

