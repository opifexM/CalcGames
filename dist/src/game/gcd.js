import { BaseGame } from '#src/game/base-game.js';
import { getRandomFromRange } from '#src/utils/random.js';
export class Gcd extends BaseGame {
    #questionValueMin = 1;
    #questionValueMax = 100;
    constructor() {
        super('Find the greatest common divisor of given numbers.');
    }
    gcd(firstValue, secondValue) {
        if (!secondValue) {
            return firstValue;
        }
        return this.gcd(secondValue, firstValue % secondValue);
    }
    getGameData() {
        const firstValue = getRandomFromRange(this.#questionValueMin, this.#questionValueMax);
        const secondValue = getRandomFromRange(this.#questionValueMin, this.#questionValueMax);
        const question = `${firstValue} ${secondValue}`;
        const answer = this.gcd(firstValue, secondValue);
        return {
            answer: answer.toString(),
            question
        };
    }
}
