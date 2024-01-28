import startGame from '../index.js';
import getRandomInteger from '../utils/random.js';

const OPERATORS = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};
const OPERATOR_KEYS = Object.keys(OPERATORS);

const instruction = 'What is the result of the expression?';

/**
 *
 * @returns {GameData}
 */
const getGameData = () => {
  const first = getRandomInteger();
  const second = getRandomInteger();
  const operator = OPERATOR_KEYS[getRandomInteger(0, OPERATOR_KEYS.length - 1)];
  const question = `${first} ${operator} ${second}`;
  const correctAnswer = OPERATORS[operator](first, second);

  return {
    question,
    correctAnswer: correctAnswer.toString(),
  };
};

const start = () => startGame(instruction, getGameData);

export default start;
