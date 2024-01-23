import startGame from '../index.js';
import getRandomInteger from '../utils/random.js';

const getGameData = () => {
  const introduction = 'What number is missing in the progression?';
  const totalNumbers = getRandomInteger(5, 10);
  const hideIndex = getRandomInteger(2, totalNumbers);
  let lastNumber = getRandomInteger(1, 10);
  const difference = getRandomInteger(1, 10);
  let question = '';
  let answer = '';
  for (let i = 1; i <= totalNumbers; i += 1) {
    if (question.length > 0) {
      question += ' ';
    }
    if (i === hideIndex) {
      answer = lastNumber;
      question += '..';
    } else {
      question += `${lastNumber}`;
    }
    lastNumber += difference;
  }
  return {
    introduction,
    question,
    answer: answer.toString(),
  };
};

const start = () => startGame(getGameData);

export default start;
