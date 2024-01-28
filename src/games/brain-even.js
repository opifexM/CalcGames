import startGame from '../index.js';
import getRandomInteger from '../utils/random.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (question) => question % 2 === 0;

/**
 *
 * @returns {GameData}
 */
const getGameData = () => {
  const question = getRandomInteger();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return {
    question: question.toString(),
    correctAnswer,
  };
};

const start = () => startGame(instruction, getGameData);

export default start;
