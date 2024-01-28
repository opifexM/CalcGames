import startGame from '../index.js';
import getRandomInteger from '../utils/random.js';

const instruction = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

/**
 *
 * @returns {GameData}
 */
const getGameData = () => {
  const first = getRandomInteger();
  const second = getRandomInteger();
  const question = `${first} ${second}`;
  const correctAnswer = getGcd(first, second);

  return {
    question,
    correctAnswer: correctAnswer.toString(),
  };
};

const start = () => startGame(instruction, getGameData);

export default start;
