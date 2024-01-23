import startGame from '../index.js';
import getRandomInteger from '../utils/random.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

/**
 *
 * @returns {GameData}
 */
const getGameData = () => {
  const introduction = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const question = getRandomInteger();
  const answer = isPrime(question) ? 'yes' : 'no';

  return {
    introduction,
    question: question.toString(),
    answer,
  };
};

const start = () => startGame(getGameData);

export default start;
