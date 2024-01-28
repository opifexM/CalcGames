import { getUserAnswer, sendConsoleText } from './cli.js';
import getUserName from './games/brain-games.js';

const GAME_ATTEMPTS = 3;

/**
 *
 * @param {String} instruction
 * @param {() => GameData} getGameData
 */
const startGame = (instruction, getGameData) => {
  const userName = getUserName();
  sendConsoleText(instruction);

  for (let i = 0; i < GAME_ATTEMPTS; i += 1) {
    const { question, correctAnswer } = getGameData();
    sendConsoleText(`Question: ${question}`);

    const userAnswer = getUserAnswer('Your answer: ');
    if (userAnswer === correctAnswer) {
      sendConsoleText('Correct!');
    } else {
      sendConsoleText(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      sendConsoleText(`Let's try again, ${userName}!`);
      return;
    }
  }
  sendConsoleText(`Congratulations, ${userName}!`);
};

export default startGame;
