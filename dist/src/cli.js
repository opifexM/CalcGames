import * as console from 'console';
import readlineSync from 'readline-sync';
export class Cli {
    game;
    greet;
    gameSetting;
    userName = '';
    currentGameLose = 0;
    currentGameWin = 0;
    constructor(game, greet, gameSetting) {
        this.game = game;
        this.greet = greet;
        this.gameSetting = gameSetting;
    }
    start() {
        console.log(this.game.welcome);
        if (!this.userName) {
            this.runGreet();
        }
        if (this.game.isStandardGame) {
            this.runGame();
        }
    }
    runGreet() {
        const gameData = this.greet.getGameData();
        this.userName = readlineSync.question(`${gameData.question}`);
        console.log(`Hello, ${this.userName}!`);
    }
    runGame() {
        console.log(this.game.instruction);
        while (this.currentGameLose < this.gameSetting.lose && this.currentGameWin < this.gameSetting.win) {
            const gameData = this.game.getGameData();
            console.log(`Question: ${gameData.question}`);
            const userAnswer = readlineSync.question('Your answer: ');
            if (userAnswer === gameData.answer) {
                console.log('Correct!');
                this.currentGameWin++;
            }
            else {
                console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameData.answer}'.`);
                this.currentGameLose++;
            }
        }
        if (this.currentGameLose === this.gameSetting.lose) {
            console.log(`Let's try again, ${this.userName}!`);
        }
        if (this.currentGameWin === this.gameSetting.win) {
            console.log(`Congratulations, ${this.userName}!`);
        }
    }
}
