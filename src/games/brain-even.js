import startGame from '../index.js';
import getRandomInteger from '../utils/random.js';

/**
 *
 * @returns {GameData}
 */
const getGameData = () => {
  const introduction = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = getRandomInteger();
  const isEven = question % 2 === 0;
  const answer = isEven ? 'yes' : 'no';

  return {
    introduction,
    question: question.toString(),
    answer,
  };
};

const start = () => startGame(getGameData);

export default start;
