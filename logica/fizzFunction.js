
const respuesta = parseInt(prompt("Cuantas numeros quiere para la funcion FizzBuzz"));


//firma de la funcion
const fizzBuzz = (counterNumber) =>{
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

} while (counter <= counterNumber);
};


fizzBuzz(respuesta);

/*
console.log("200 veces");
fizzBuzz(200);
*/