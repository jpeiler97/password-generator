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
	}
}

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', getPasswordOptions);
