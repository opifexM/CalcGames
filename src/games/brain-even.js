import startGame from '../index.js';
import getRandomInteger from '../utils/random.js';

function isEven(question) {
  return question % 2 === 0;
}

/**
 *
 * @returns {GameData}
 */
const getGameData = () => {
  const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = getRandomInteger();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return {
    instruction,
    question: question.toString(),
    correctAnswer,
  };
};

const start = () => startGame(getGameData);

export default start;
