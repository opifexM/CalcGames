import startGame from '../index.js';
import getRandomInteger from '../utils/random.js';

const instruction = 'What number is missing in the progression?';

function getProgression(totalNumbers, hideIndex, lastNumber, difference) {
  let question = '';
  let correctAnswer = '';
  let currentLastNumber = lastNumber;
  for (let i = 1; i <= totalNumbers; i += 1) {
    if (question.length > 0) {
      question += ' ';
    }
    if (i === hideIndex) {
      correctAnswer = currentLastNumber;
      question += '..';
    } else {
      question += `${currentLastNumber}`;
    }
    currentLastNumber += difference;
  }
  return {
    question,
    correctAnswer,
  };
}

/**
 *
 * @returns {GameData}
 */
const getGameData = () => {
  const totalNumbers = getRandomInteger(5, 10);
  const hideIndex = getRandomInteger(2, totalNumbers);
  const lastNumber = getRandomInteger(1, 10);
  const difference = getRandomInteger(1, 10);
  const {
    question,
    correctAnswer,
  } = getProgression(totalNumbers, hideIndex, lastNumber, difference);

  return {
    question,
    correctAnswer: correctAnswer.toString(),
  };
};

const start = () => startGame(instruction, getGameData);

export default start;
