/*
Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

Spanish: 
Escribe un programa que solicite una palabra u oración (puede estar en mayúsculas, tener espacios y puntuación). Determina si la oración/palabra es un palíndromo. Ignora la puntuación, los espacios y las mayúsculas.

1.Solicitar una palabra u oracion
2.Determinar si la oracion/palabra es palindromo
3.Ignorar puntuacion, espacios y mayusculas

*/

function esPalindromo(texto) {
  texto = texto.toLowerCase(); //metodo .toLowerCase para convertir todo en minusculas para ignorar las mayusculas
  const textoReverso = texto.split('').reverse().join(''); // .split divide la cadena en un arreglo (array) de subcadena, se usa comilla simples para separar la cadena caracter por caracter / .reverse  invierte el orden de los elementos del array / .join es un metodo que une todos los elementos del array en una cadena, como argumento se usa comillas simples que quiere decir que une los elementos sin espacios o caracteres entre los elementos
  return texto === textoReverso;
}

const entrada = prompt("Introduce una palabra o una oracion:");

if (esPalindromo(entrada)) {
  console.log(`${entrada} es palíndromo`);
} else {
  console.log(`${entrada} no es palíndromo`);
}