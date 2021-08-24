const Wagon = require("./Wagon")
const Traveler = require("./Traveler")
const Hunter = require("./Hunter")


// Criar uma carroça que comporta 3 pessoas
let wagon = new Wagon(3);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let camila = new Hunter('Camila');

console.log(`${wagon.getAvailableSeatCount()} should be 3`);
wagon.join(camila)

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);

console.log(`${wagon.getAvailableSeatCount()} should be 1`);
wagon.join(juan);


console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat()
juan.eat();//  juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 5`);

