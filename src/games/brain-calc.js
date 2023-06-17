#!/usr/bin/env node
import getRandomInteger from '../utils/random.js';
import startGame from './brain-games.js';

const OPERATORS = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};
const OPERATOR_KEYS = Object.keys(OPERATORS);

const getIntroduction = () => 'What is the result of the expression?';

const getGameData = () => {
  const first = getRandomInteger(1, 100);
  const second = getRandomInteger(1, 100);
  const operator = OPERATOR_KEYS[getRandomInteger(0, OPERATOR_KEYS.length - 1)];
  const question = `${first} ${operator} ${second}`;
  const answer = String(OPERATORS[operator](first, second));

  return {
    question,
    answer,
  };
};

const start = () => {
  startGame(getIntroduction, getGameData);
};

export default start;
