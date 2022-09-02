import './style.css';
import idfunc from './createNewGame.js';
import result from './postScores.js';
import refresh from './refreshScores';

const id = idfunc('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/');
const urlScore='https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/';
// result(urlScore);

const nameInput=document.getElementById('name');
const scoreInput=document.getElementById('score');
const form = document.getElementById('form');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const name=nameInput.value;
    const score=scoreInput.value;
    result(urlScore,name,score);

});

const refreshBtn=document.getElementById('refresh');
refreshBtn.addEventListener('click', () => {

    refresh(urlScore);
});






