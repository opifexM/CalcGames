import startGame from '../index.js';

/**
 *
 * @returns {WelcomeData}
 */
const getUserName = () => {
  const welcome = 'Welcome to the Brain Games!';
  const question = 'May I have your name?: ';
  const hello = 'Hello, ';

  return {
    welcome,
    question,
    hello,
  };
};

const start = () => startGame();

export { start, getUserName };
