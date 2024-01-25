import { getUserAnswer, sendConsoleText } from '../cli.js';

const getUserName = () => {
  const welcome = 'Welcome to the Brain Games!';
  const question = 'May I have your name?: ';

  sendConsoleText(welcome);
  const userName = getUserAnswer(question);
  sendConsoleText(`Hello, ${userName}`);

  return userName;
};

export default getUserName;
