const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const Traveler = require("../../models/Traveler");

const { cacador } = require("./../../app");

let viajante = new Traveler("Anderson")
let initialFood = viajante.food

Given('um Hunter de nome {string}', function (string) {
   cacador.name = string
});

Given('ele sempre começa a sua viagem com {int} refeições', function (int) {
    cacador.food = int
})

Given('ele sempre começa a sua viagem saudável', function () {
    cacador.isHealthy
  });

When('o Hunter sair para caçar {int} vezes', function (int) {
    for (let contador = 0; contador < int; contador++) {
        cacador.hunt();
    }
});

When('o Hunter parar para comer {int} vezes', function (int) {
    for (let contador = 0; contador < int; contador++) {
        cacador.eat();
    }
});

When('o Hunter compartilhar {int} refeições com um Traveler', function (int) {
    cacador.giveFood(viajante, int)
    });

Then('a sua quantidade de refeições deve ser igual a {int}', function (int) {
    assert.strictEqual(cacador.food, int)   
});

Then('a quantidade de refeições do Hunter deve ser igual a {int}', function (int) {
    assert.strictEqual(cacador.food, int)
});

Then('o Traveler deverá receber mais {int} refeições', function (int) {
    assert.strictEqual(viajante.food, initialFood + int)      
});

Then('a quantidade de refeições do Hunter deve se manter como {int}', function (int) {
    assert.strictEqual(cacador.food, int)
});

Then('o Traveler não receberá refeições', function () {
    assert.strictEqual(initialFood, 1)
  });

Then('o Hunter não ficará doente', function () {
    let isHunterHealthy = cacador.isHealthy
    assert.strictEqual(isHunterHealthy, true)
});

Then('o Hunter ficará doente', function () {
    let isHunterHealthy = cacador.isHealthy
    assert.strictEqual(isHunterHealthy, false)
});