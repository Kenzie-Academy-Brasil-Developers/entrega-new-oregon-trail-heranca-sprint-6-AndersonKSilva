const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");
const Traveler = require("../../models/Traveler");

const { doutor } = require("./../../app");

let viajante = new Traveler("Anderson")
viajante.isHealthy = false


Given('um Doctor de nome {string}', function (string) {
  doutor.name = string
});

Given('ele sempre começa a sua viagem com {int} refeição', function (int) {
    doutor.food = int
});

When('o Doctor curar um Traveler doente', function () {
  doutor.heal(viajante)
});

When('o Doctor tenta curar um Traveler já saudável', function () {
  viajante.isHealthy = true
  doutor.heal(viajante)
});

Then('o Traveler deverá ficar saudável', function () {
  assert.strictEqual(viajante.isHealthy, true)
});

Then('o Traveler deverá continuar saudável', function () {
  assert.strictEqual(viajante.isHealthy, true)
});