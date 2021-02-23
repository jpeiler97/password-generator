// Assignment Code
var generateBtn = document.querySelector('#generate');

var specialChar = [
	'!',
	'"',
	'#',
	'$',
	'%',
	'&',
	"'",
	'(',
	')',
	'*',
	'+',
	',',
	'-',
	'.',
	'/',
	':',
	';',
	'<',
	'=',
	'>',
	'?',
	'@',
	'[',
	'\\',
	']',
	'^',
	'_',
	'`',
	'{',
	'}',
	'|',
	'~'
];

var numChar = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];

var lowerCaseChar = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
];

var upperCaseChar = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z'
];

function getPasswordOptions() {
	var passLength = prompt('Please input the desired length of your password. Length may be between 8 and 128');

	if (isNaN(passLength) === true || passLength.length === 0) {
		alert('Please enter a number value');
		return;
	}

	if (passLength < 8) {
		alert('Password length is too short.');
		return;
	}

	if (passLength > 128) {
		alert('Password length is too long.');
		return;
	}

	var specialCharCheck = prompt('Would you like to include special characters? Type yes or no.');

	if (specialCharCheck.toLowerCase() === 'yes') {
		specialCharCheck = true;
	} else if (specialCharCheck.toLowerCase() === 'no') {
		specialCharCheck = false;
	} else {
		alert('You did not enter yes or no. Your password will by default have no special characters.');
		specialCharCheck = false;
	}

	var numCharCheck = prompt('Would you like to include numerical characters? Type yes or no.');
	if (numCharCheck.toLowerCase() === 'yes') {
		numCharCheck = true;
	} else if (numCharCheck.toLowerCase() === 'no') {
		numCharCheck = false;
	} else {
		alert('You did not enter yes or no. Your password will by default have no numerical characters.');
		numCharCheck = false;
	}

	var lowerCharCheck = prompt('Would you like to include lower-case characters? Type yes or no.');
	if (lowerCharCheck.toLowerCase() === 'yes') {
		lowerCharCheck = true;
	} else if (lowerCharCheck.toLowerCase() === 'no') {
		lowerCharCheck = false;
	} else {
		alert('You did not enter yes or no. Your password will by default have no lower-case characters.');
		lowerCharCheck = false;
	}

	var upperCharCheck = prompt('Would you like to include upper-case characters? Type yes or no.');
	if (upperCharCheck.toLowerCase() === 'yes') {
		upperCharCheck = true;
	} else if (upperCharCheck.toLowerCase() === 'no') {
		upperCharCheck = false;
	} else {
		alert('You did not enter yes or no. Your password will by default have no upper-case characters.');
		upperCharCheck = false;
	}

	if (specialCharCheck === false && numCharCheck === false && lowerCharCheck === false && upperCharCheck === false) {
		alert('You must select at least one character type.');
		return;
	}

	var characterTypes = {
		passLength,
		specialCharCheck,
		numCharCheck,
		lowerCharCheck,
		upperCharCheck
	};

	return characterTypes;
}

function getRandomElement(arr) {
	var randIndex = arr.length;
	var randElement = Math.float(Math.random * randIndex);
	return randElement;
}

function generatePassword() {
	var options = getPasswordOptions();
	var result = [];
}

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', getPasswordOptions);
