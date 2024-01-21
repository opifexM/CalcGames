import { getUserAnswer, sendConsoleText } from '../cli.js';
import startTurn from '../index.js';

const GAME_ATTEMPTS = 3;

const startGame = (getIntroduction, getGameData) => {
  sendConsoleText('Welcome to the Brain Games!');
  const name = getUserAnswer('May I have your name?: ');
  sendConsoleText(`Hello, ${name}`);

  if (typeof getIntroduction === 'function' && typeof getGameData === 'function') {
    if (startTurn(GAME_ATTEMPTS, getIntroduction, getGameData)) {
      sendConsoleText(`Congratulations, ${name}!`);
    } else {
      sendConsoleText(`Let's try again, ${name}!`);
    }
  }
};

export default startGame;
