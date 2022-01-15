const wordLength = 6;
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

let state = [];

const onKeydown = ({ key }) => {
  if (state.length < wordLength && alphabet.includes(key)) {
    state.push(key);
  }
  if (key === 'Backspace') {
    state.pop();
  }
  updateUI(state);
};

document.addEventListener('keydown', onKeydown);

const $row = document.querySelector('.row');
const $squares = $row.querySelectorAll('.square');

const updateUI = (state) => {
  $squares.forEach((square, i) => {
    // Set all empty squares to empty string to handle Backspace.
    square.textContent = state[i] || '';
  });
};
