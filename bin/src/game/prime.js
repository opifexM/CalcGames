import { BaseGame } from '#src/game/base-game.js';
import { getRandomFromRange } from '#src/utils/random.js';
export class Prime extends BaseGame {
    #questionValueMin = 1;
    #questionValueMax = 100;
    constructor() {
        super('Answer "yes" if given number is prime. Otherwise answer "no".');
    }
    isPrime(value) {
        if (value <= 1) {
            return false;
        }
        for (let i = 2, sqrt = Math.sqrt(value); i <= sqrt; i += 1) {
            if (value % i === 0) {
                return false;
            }
        }
        return true;
    }
    getGameData() {
        const question = getRandomFromRange(this.#questionValueMin, this.#questionValueMax);
        const answer = this.isPrime(question) ? 'yes' : 'no';
        return {
            answer,
            question: question.toString()
        };
    }
}
