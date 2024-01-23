import startGame from '../index.js';
import getRandomInteger from '../utils/random.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

/**
 *
 * @returns {GameData}
 */
const getGameData = () => {
  const introduction = 'Find the greatest common divisor of given numbers.';
  const first = getRandomInteger();
  const second = getRandomInteger();
  const question = `${first} ${second}`;
  const answer = gcd(first, second);

  return {
    introduction,
    question,
    answer: answer.toString(),
  };
};

const start = () => startGame(getGameData);

export default start;
