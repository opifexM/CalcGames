import { getUserAnswer, sendConsoleText } from './cli.js';
import getUserName from './games/brain-games.js';

const GAME_ATTEMPT = 3;

/**
 *
 * @param {() => GameData} getGameData
 */
const startGame = (getGameData) => {
  const userName = getUserName();

  let isGameSuccess = true;
  for (let i = 0; i < GAME_ATTEMPT; i += 1) {
    const { question, correctAnswer, instruction } = getGameData();
    if (i === 0) {
      sendConsoleText(instruction);
    }
    sendConsoleText(`Question: ${question}`);

    const userAnswer = getUserAnswer('Your answer: ');
    if (userAnswer === correctAnswer) {
      sendConsoleText('Correct!');
    } else {
      sendConsoleText(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      isGameSuccess = false;
      break;
    }
  }

  if (isGameSuccess) {
    sendConsoleText(`Congratulations, ${userName}!`);
  } else {
    sendConsoleText(`Let's try again, ${userName}!`);
  }
};

export default startGame;
