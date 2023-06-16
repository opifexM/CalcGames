#!/usr/bin/env node
import getRandomInteger from '../utils/random.js';
import startGame from './brain-games.js';

const getIntroduction = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const question = String(getRandomInteger(1, 100));
  const answer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

const start = () => {
  startGame(getIntroduction, getGameData);
};

export default start;
