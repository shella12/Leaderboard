import './style.css';
import idfunc from './createNewGame.js';
import result from './postScores.js';
import refresh from './refreshScores.js';
import list from './listDisplay.js';

let urlScore;

const urlScoreFunction = (id) => {
  urlScore = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ ${
    id
  }/scores/`;
};

idfunc('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/')
  .then((id) => urlScoreFunction(id));

const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
const form = document.getElementById('form');
const ulist = document.getElementById('ulist');
ulist.innerHTML = '<li>list is empty</li>';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const score = Number(scoreInput.value);
  nameInput.value = '';
  scoreInput.value = '';
  result(urlScore, name, score);
});

const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', () => {
  refresh(urlScore)
    .then((value) => list(value));
});
