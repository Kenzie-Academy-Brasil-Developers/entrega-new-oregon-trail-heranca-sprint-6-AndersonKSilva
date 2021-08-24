const Wagon = require("./Wagon")
const Traveler = require("./Traveler")
const Hunter = require("./Hunter");
const Doctor = require("./Doctor");


// Criar uma carroça que comporta 3 pessoas
let wagon = new Wagon(4);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let camila = new Hunter('Camila');
let anderson = new Doctor('Anderson')

console.log(`${wagon.getAvailableSeatCount()} should be 4`);
wagon.join(anderson)

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
camila.hunt()
anderson.heal(juan)

console.log(`${wagon.shouldQuarantine()} should be false`);
console.log(`${wagon.totalFood()} should be 5`);

