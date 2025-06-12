/*
Highest number

Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.

spanish: 
Número más alto
Escribe un programa que solicite 10 números. Utilizando operadores lógicos y cualquier otra función o estructura de JavaScript que hayas visto antes, determina y genera el mayor de esos números.

1. solicitar al usuario 10 numeros
2. determinar y mostrar cual es el mayor de esos numeros

*/

let numbers = [];
for(let i = 1; i <= 10; i++){
    numbers.push(parseInt(prompt("Ingresa un número: ")))
}
console.log(Math.max(...numbers));





