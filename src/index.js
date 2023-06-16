import { getUserAnswer, sendConsoleText } from './cli.js';

const startTurn = (maxGame, getIntroduction, getGameData) => {

  const gameData = Array.from({ length: maxGame }, getGameData);

  sendConsoleText(getIntroduction());
  for (const {
    question: currentQuestion,
    answer: correctAnswer
  } of gameData) {
    sendConsoleText(`Question: ${currentQuestion}`);
    const userAnswer = getUserAnswer('Your answer: ');
    if (userAnswer === correctAnswer) {
      sendConsoleText('Correct!');
    } else {
      sendConsoleText(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
  }
  return true;
};

export default startTurn;
