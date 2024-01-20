import { Cli } from '#src/cli.js';
import { Calc } from '#src/game/calc.js';
import { Even } from '#src/game/even.js';
import { Gcd } from '#src/game/gcd.js';
import { Greet } from '#src/game/greet.js';
import { Prime } from '#src/game/prime.js';
import { Progression } from '#src/game/progression.js';
const defaultSetting = {
    lose: 1,
    win: 3
};
function initializeGame(game) {
    const cli = new Cli(game, new Greet(), defaultSetting);
    cli.start();
}
function initiateGreeting() {
    initializeGame(new Greet());
}
function initiateEvenGame() {
    initializeGame(new Even());
}
function initiateCalcGame() {
    initializeGame(new Calc());
}
function initiateGcdGame() {
    initializeGame(new Gcd());
}
function initiatePrimeGame() {
    initializeGame(new Prime());
}
function initiateProgressionGame() {
    initializeGame(new Progression());
}
export { initiateCalcGame, initiateEvenGame, initiateGcdGame, initiateGreeting, initiatePrimeGame, initiateProgressionGame };
