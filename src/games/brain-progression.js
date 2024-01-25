import startGame from '../index.js';
import getRandomInteger from '../utils/random.js';

/**
 *
 * @returns {GameData}
 */
const getGameData = () => {
  const instruction = 'What number is missing in the progression?';
  const totalNumbers = getRandomInteger(5, 10);
  const hideIndex = getRandomInteger(2, totalNumbers);
  let lastNumber = getRandomInteger(1, 10);
  const difference = getRandomInteger(1, 10);
  let question = '';
  let correctAnswer = '';
  for (let i = 1; i <= totalNumbers; i += 1) {
    if (question.length > 0) {
      question += ' ';
    }
    if (i === hideIndex) {
      correctAnswer = lastNumber;
      question += '..';
    } else {
      question += `${lastNumber}`;
    }
    lastNumber += difference;
  }
  return {
    instruction,
    question,
    correctAnswer: correctAnswer.toString(),
  };
};

const start = () => startGame(getGameData);

export default start;
