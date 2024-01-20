export class BaseGame {
    #isStandardGame;
    #instruction;
    #welcome = 'Welcome to the Brain Games!';
    constructor(instruction, isStandardGame = true) {
        this.#instruction = instruction;
        this.#isStandardGame = isStandardGame;
    }
    getGameData() {
        return {
            answer: '',
            question: ''
        };
    }
    get instruction() {
        return this.#instruction;
    }
    get welcome() {
        return this.#welcome;
    }
    get isStandardGame() {
        return this.#isStandardGame;
    }
}
