#!/usr/bin/env node
import getRandomInteger from '../utils/random.js';
import startGame from './brain-games.js';

const getIntroduction = () => 'What number is missing in the progression?';

const getGameData = () => {
  const totalNumbers = getRandomInteger(5, 10);
  const hideIndex = getRandomInteger(2, totalNumbers);
  let lastNumber = getRandomInteger(1, 10);
  const difference = getRandomInteger(1, 10);
  let question = '';
  let answer = '';
  for (let i = 1; i <= totalNumbers; i++) {
    if (question.length > 0) {
      question += ' ';
    }
    if (i === hideIndex) {
      answer = String(lastNumber);
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
