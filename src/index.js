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
    const gameData = getGameData();
    if (i === 0) {
      sendConsoleText(gameData.instruction);
    }
    sendConsoleText(`Question: ${gameData.question}`);
    const userAnswer = getUserAnswer('Your answer: ');
    if (userAnswer === gameData.correctAnswer) {
      sendConsoleText('Correct!');
    } else {
      sendConsoleText(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameData.answer}'.`);
      isGameSuccess = false;
    }
  }

  if (isGameSuccess) {
    sendConsoleText(`Congratulations, ${userName}!`);
  } else {
    sendConsoleText(`Let's try again, ${userName}!`);
  }
};

export default startGame;
