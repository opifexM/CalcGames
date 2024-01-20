import { BaseGame } from '#src/game/base-game.js';
export class Greet extends BaseGame {
    constructor() {
        super('', false);
    }
    getGameData() {
        return {
            answer: '',
            question: 'May I have your name? '
        };
    }
}
