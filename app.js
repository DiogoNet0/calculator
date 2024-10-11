const btnAdd = document.getElementById('btn__key--addiction');
const btnOne = document.getElementById('btn__key--one');
const btnTwo = document.getElementById('btn__key--two');
const btnThree = document.getElementById('btn__key--three');
const btnFour = document.getElementById('btn__key--four');
const btnFive = document.getElementById('btn__key--five');
const btnSix = document.getElementById('btn__key--six');
const btnSeven = document.getElementById('btn__key--seven');
const btnEight = document.getElementById('btn__key--eight');
const btnNine = document.getElementById('btn__key--nine');
const displayResult = document.getElementById('display--result');

const result = 99;

function helloWorld() {
  console.log('Hello world');
}

btnOne.addEventListener('click', helloWorld);
btnTwo.addEventListener('click', helloWorld);
btnThree.addEventListener('click', helloWorld);
btnFour.addEventListener('click', helloWorld);
btnFive.addEventListener('click', helloWorld);
btnSix.addEventListener('click', helloWorld);
btnSeven.addEventListener('click', helloWorld);
btnEight.addEventListener('click', helloWorld);
btnNine.addEventListener('click', helloWorld);
btnAdd.addEventListener('click', helloWorld);

displayResult.textContent = result;
