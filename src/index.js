import { getUserAnswer, sendConsoleText } from './cli.js';
import getUserName from './games/brain-games.js';

const GAME_ATTEMPT = 3;

const startGameTurn = (getGameData) => {
  for (let i = 0; i < GAME_ATTEMPT; i += 1) {
    /**
     * @type {GameData}
     */
    const gameData = getGameData();
    if (i === 0) {
      sendConsoleText(gameData.introduction);
    }
    sendConsoleText(`Question: ${gameData.question}`);
    const userAnswer = getUserAnswer('Your answer: ');
    if (userAnswer === gameData.answer) {
      sendConsoleText('Correct!');
    } else {
      sendConsoleText(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameData.answer}'.`);
      return false;
    }
  }
  return true;
};

const startGame = (getGameData) => {
  /**
   * @type {WelcomeData}
   */
  const welcomeData = getUserName();
  sendConsoleText(welcomeData.welcome);
  const userName = getUserAnswer(welcomeData.question);
  sendConsoleText(`${welcomeData.hello}${userName}`);

  if (!getGameData) {
    return;
  }

  const isGameSuccess = startGameTurn(getGameData);
  if (isGameSuccess) {
    sendConsoleText(`Congratulations, ${userName}!`);
  } else {
    sendConsoleText(`Let's try again, ${userName}!`);
  }
};

export default startGame;
