import readlineSync from 'readline-sync';

const getUserAnswer = (txt) => {
  return readlineSync.question(txt);
};

const sendConsoleText = (txt) => {
  console.log(txt);
};

export { getUserAnswer, sendConsoleText };
