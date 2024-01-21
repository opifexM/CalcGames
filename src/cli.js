import readlineSync from 'readline-sync';

const getUserAnswer = (txt) => readlineSync.question(txt);

const sendConsoleText = (txt) => console.log(txt);

export { getUserAnswer, sendConsoleText };
