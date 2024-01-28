import startGame from '../index.js';
import getRandomInteger from '../utils/random.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const question = getRandomInteger();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return {
    instruction,
    question: question.toString(),
    correctAnswer,
  };
};

const start = () => startGame(instruction, getGameData);

export default start;
