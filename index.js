const wordLength = 6;
const alphabet = 'abcdefghijklmnopqrstuvwxyz'

let state = [];

const onKeydown = ({ key }) => {
  console.log(key);
  if (state.length < wordLength && alphabet.includes(key)) {
    state.push(key);
  }
  if (key === 'Backspace') {
    state.pop();
  }
  console.log(state);
};
document.addEventListener('keydown', onKeydown);