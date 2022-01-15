const wordLength = 6;
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const target = ['l', 'e', 't', 't', 'e', 'r'];
const guess = [];
let locked = false;

const onKeydown = ({ key }) => {
  if (guess.length < wordLength && alphabet.includes(key)) {
    guess.push(key);
  }
  if (key === 'Backspace') {
    guess.pop();
  }
  if (key === 'Enter' && guess.length === 6) {
    locked = true;
  }
  updateUI(guess, locked, target);
};

document.addEventListener('keydown', onKeydown);

const getResult = (letter, position, target) => {
  if (target[position] === letter) {
    return 'correct';
  }
  if (target.includes(letter)) {
    return 'present';
  }
  return 'incorrect';
};

const $row = document.querySelector('.row');
const $squares = $row.querySelectorAll('.square');

const updateUI = (guess, locked, target) => {
  $squares.forEach((square, i) => {
    // Set all empty squares to empty string to handle Backspace.
    square.textContent = guess[i] || '';
  });

  if (locked) {
    $squares.forEach((square, i) => {
      square.classList.add(getResult(guess[i], i, target));
    });
  }
};
