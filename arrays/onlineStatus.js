/*
Online status
Display online status for a list of users.
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.

Mostrar el estado de conexión de una lista de usuarios.

Ejemplo:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` debería devolver `'mockIng99, J0eyPunch y 1 usuario más conectado'`.
*/

function onlineStatus(users) {
    const count = users.length; //Inicializar el contador con el contenido de elementos del arreglo .length 

    if (count === 0) { // si no hay un elemento en el arreglo (usuario) escribe en consola no one online
        return "no one online";
    } else if (count === 1) { //si hay un elemento en el arreglo [0] escribe el mensaje del elemento del array y onlinej
        return `${users[0]} online`;
    } else if (count === 2) {
        return `${users[0]} and ${users[1]} online`;
    } else {
        return `${users[0]}, ${users[1]} and ${count - 2} more online`;
    }
}

console.log(onlineStatus([]));
console.log(onlineStatus(['mockIng99']));
console.log(onlineStatus(['mockIng99', 'J0eyPunch']));
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer', "YaeMoli"]));
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer', "YaeMoli", "GingeM"]));



