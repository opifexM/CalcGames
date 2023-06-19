#!/usr/bin/env node
import getRandomInteger from '../utils/random.js';
import startGame from './brain-games.js';

const getIntroduction = () => 'What number is missing in the progression?';

const getGameData = () => {
  const hideIndex = getRandomInteger(2, 10);
  let lastNumber = getRandomInteger(1, 100);
  const difference = getRandomInteger(1, 100);
  let question = '';
  let answer = '';
  for (let i = 1; i <= getRandomInteger(5, 10); i++) {
    if (question.length > 1) {
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
    question,
    answer,
  };
};

const start = () => {
  startGame(getIntroduction, getGameData);
};

export default start;
