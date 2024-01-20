import { BaseGame } from '#src/game/base-game.js';
import { getRandomFromRange } from '#src/utils/random.js';
export class Calc extends BaseGame {
    #questionValueMin = 1;
    #questionValueMax = 100;
    #operationsMap = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b
    };
    #operationKeys = Object.keys(this.#operationsMap);
    constructor() {
        super('What is the result of the expression?');
    }
    getGameData() {
        const operationIndex = getRandomFromRange(0, this.#operationKeys.length - 1);
        const operationKey = this.#operationKeys[operationIndex];
        if (!operationKey) {
            throw new Error('Operation key is undefined');
        }
        const operationFunction = this.#operationsMap[operationKey];
        if (!operationFunction) {
            throw new Error('Operation key is undefined');
        }
        const firstValue = getRandomFromRange(this.#questionValueMin, this.#questionValueMax);
        const secondValue = getRandomFromRange(this.#questionValueMin, this.#questionValueMax);
        const question = `${firstValue} ${operationKey} ${secondValue}`;
        const answer = operationFunction(firstValue, secondValue);
        return {
            answer: answer.toString(),
            question
        };
    }
}
