// Grabbing elements on page for event listeners
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');
const saveBtn = document.getElementById('savePass');
// =================================================
const randomFunc = {
	// lower: getLower,
	// upper: getUpper,
	// number: getNumber,
	// symbol: getSymbol
};
// dummy check vars 
const a = true;


generateEl.addEventListener('click', () => {
    if (a) {
    randomFunc.lower = getLower
    }
    console.log('add to obj', randomFunc)
});

// Object that holds all of our functions 

// const objKeys = Object.keys(randomFunc);
// console.log(objKeys);
// console.log('random key',randomFunc[objKeys[Math.floor(Math.random()*4)]]());

// Randomizer functions defined below 
function getLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
 };

 function getUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 };

  function getNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  };

  function getSymbol() {
    const symbols = '!@$%^&*+-';
    return symbols[Math.floor(Math.random() * symbols.length)];
  };