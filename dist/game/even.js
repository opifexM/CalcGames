import { BaseGame } from '#src/game/base-game.js';
import { getRandomFromRange } from '#src/utils/random.js';
export class Even extends BaseGame {
    #questionValueMin = 1;
    #questionValueMax = 100;
    constructor() {
        super('Answer "yes" if the number is even, otherwise answer "no".');
    }
    getGameData() {
        const question = getRandomFromRange(this.#questionValueMin, this.#questionValueMax);
        const answer = question % 2 === 0
            ? 'yes'
            : 'no';
        return {
            answer,
            question: question.toString()
        };
    }
}
