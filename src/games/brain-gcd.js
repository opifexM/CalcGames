#!/usr/bin/env node
import getRandomInteger from '../utils/random.js';
import startGame from './brain-games.js';

const getIntroduction = () => 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const getGameData = () => {
  const first = getRandomInteger(1, 100);
  const second = getRandomInteger(1, 100);
  const question = `${first} ${second}`;
  const answer = String(gcd(first, second));

  return {
    question,
    answer,
  };
};

startGame(getIntroduction, getGameData);
