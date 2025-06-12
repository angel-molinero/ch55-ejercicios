
const username = prompt("Hola, ingresa tu nombre de usuario: ");
const age = prompt("Ahora ingresa tu edad: ");
const favoriteMovies = [];
let counter = 0;

//vamos a pedir 5 peliculas primero
for (let i = 1 ; i <= 5; i++) {
    //los strings dentro de `` se conoce como string literal, 
    // concatenar variables y texto de una forma sencilla y legible 
    favoriteMovies.push(prompt(`Ingresa la pelicula número ${i}: `));
    //el simbolo backstick se pone con alt+96 o AltGr y tecla de cierre de llave
}

console.log(`Hola soy ${username} tengo ${age} años y mis peliculas favoritas son: `);

while(counter < favoriteMovies.length){
    console.log(`Mi pelicula favorita número ${counter + 1} es: ${favoriteMovies[counter]}`);
    counter++;
}
