#!/usr/bin/env node
import getRandomInteger from '../utils/random.js';
import startGame from './brain-games.js';

const getIntroduction = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const question = String(getRandomInteger(1, 100));
  const isEven = question % 2 === 0;
  const answer = isEven ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

const start = () => {
  startGame(getIntroduction, getGameData);
};

export default start;
