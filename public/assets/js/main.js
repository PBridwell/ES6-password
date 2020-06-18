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
// Obj holds our randomizers
const randomFunc = {
	lower: getLower,
	upper: getUpper,
	number: getNumber,
	symbol: getSymbol
};
// Adds event listener to copy button
clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;
	// if no password, exits block
    if(!password) { return; }
    // traverse DOM
	textarea.value = password;
	document.body.appendChild(textarea);
    textarea.select();
    // this holds copy functionality 
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});
// Listener for generate button
generate.addEventListener('click', () => {
    // Logic to check for character type checkboxes
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;
	
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

 generatePassword = (lower, upper, number, symbol, length) => {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}
	
	// create a loop to go through randomizer funcs
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
            console.log('obj keys:', Object.keys(type)[0])
            console.log('func name', funcName)
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
};
// Init listener for Save button
saveBtn.addEventListener('click', () => {
    const newPass = resultEl.innerText;
    console.log('to be saved', newPass);
    fetch("/update/", {
        method: "post",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            newPass,
            
        })
    })
    .then((response) => {
        return response.json()
    })
});
    
    










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