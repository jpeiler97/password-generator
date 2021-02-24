// Assignment Code
var generateBtn = document.querySelector('#generate');

//Arrays to define all characters for each character type
//Note: please excuse the formatting, my VSCode formatter automatically breaks lines in most arrays as soon as I save
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

//getPasswordOptions prompts the user first with their password length and then which character types to include using "yes" and "no".

function getPasswordOptions() {
	var passLength = prompt('Please input the desired length of your password. Length may be between 8 and 128');

	//Checks password length entry
	if (passLength === null || isNaN(passLength) === true || passLength.length === 0) {
		alert('Please enter a number value');
		return;
	} else if (passLength < 8) {
		alert('Password length is too short.');
		return;
	} else if (passLength > 128) {
		alert('Password length is too long.');
		return;
	} else {
		//Prompts the user for which character types they would like, "yes" and "no" are the only options.
		var specialCharCheck = prompt('Would you like to include special characters? Type yes or no.');

		//Checking for null to prevent errors
		if (specialCharCheck === null) {
			alert('You did not enter yes or no.');
			return;
		} else if (specialCharCheck.toLowerCase() === 'yes') {
			// checks for yes, .toLowerCase is used in case user inputs "YES" or "Yes"
			specialCharCheck = true;
		} else if (specialCharCheck.toLowerCase() === 'no') {
			// checks for no, .toLowerCase is used in case user inputs "NO" or "No"
			specialCharCheck = false;
		} else {
			alert('You did not enter yes or no.'); //all other options will stop the prompt
			return;
		}

		//Same process is repeated for other character types
		var numCharCheck = prompt('Would you like to include numerical characters? Type yes or no.');
		if (numCharCheck === null) {
			alert('You did not enter yes or no.');
			return;
		} else if (numCharCheck.toLowerCase() === 'yes') {
			numCharCheck = true;
		} else if (numCharCheck.toLowerCase() === 'no') {
			numCharCheck = false;
		} else {
			alert('You did not enter yes or no.');
			return;
		}

		var lowerCharCheck = prompt('Would you like to include lower-case characters? Type yes or no.');

		if (lowerCharCheck === null) {
			alert('You did not enter yes or no.');
			return;
		} else if (lowerCharCheck.toLowerCase() === 'yes') {
			lowerCharCheck = true;
		} else if (lowerCharCheck.toLowerCase() === 'no') {
			lowerCharCheck = false;
		} else {
			alert('You did not enter yes or no.');
			return;
		}

		var upperCharCheck = prompt('Would you like to include upper-case characters? Type yes or no.');
		if (upperCharCheck === null) {
			alert('You did not enter yes or no.');
			return;
		} else if (upperCharCheck.toLowerCase() === 'yes') {
			upperCharCheck = true;
		} else if (upperCharCheck.toLowerCase() === 'no') {
			upperCharCheck = false;
		} else {
			alert('You did not enter yes or no.');
			return;
		}

		if (
			specialCharCheck === false &&
			numCharCheck === false &&
			lowerCharCheck === false &&
			upperCharCheck === false
		) {
			alert('You must select at least one character type.');
			return;
		} else {
			//Object to store character checkss to use in the password generation function
			var characterTypes = {
				passLength,
				specialCharCheck,
				numCharCheck,
				lowerCharCheck,
				upperCharCheck
			};
			return characterTypes;
		}
	}
}

//Gets a random element from an array, defined as a function to simplify code.
function getRandomElement(arr) {
	var randIndex = Math.floor(Math.random() * arr.length);
	var randElement = arr[randIndex];
	return randElement;
}

//Function to generate password
function generatePassword() {
	//var options equals the object characterTypes returned by getPasswordOptions()
	var options = getPasswordOptions();

	//Prevents errors from occuring if user cancels or does not define length/types in getPasswordOptions
	if (options === undefined || options === null) {
		return;
	}
	//Array to store generated password to be returned
	var result = [];

	//Array with all characters from the arrays of character types chosen by the user, used to generate password
	var possibleCharacters = [];

	//One character from every type chosen by user that is spliced into random index of the password to ensure every character type the user
	//desires is put into the password string
	var guaranteedCharacters = [];

	//Checks if user wants special character type, if character check is true, the specialChar array is pushed into the possibleCharacters array,
	//and a special character is pushed into the guaranteedCharacters array
	if (options.specialCharCheck) {
		possibleCharacters.push(specialChar);
		guaranteedCharacters.push(getRandomElement(specialChar));
	}

	//Same process repeated for other character types
	if (options.numCharCheck) {
		possibleCharacters.push(numChar);
		guaranteedCharacters.push(getRandomElement(numChar));
	}

	if (options.lowerCharCheck) {
		possibleCharacters.push(lowerCaseChar);
		guaranteedCharacters.push(getRandomElement(lowerCaseChar));
	}

	if (options.upperCharCheck) {
		possibleCharacters.push(upperCaseChar);
		guaranteedCharacters.push(getRandomElement(upperCaseChar));
	}
	//

	//Random characters from the possibleCharacters are pushed into var result, based on the length of the password given by the user
	for (i = 0; i < options.passLength; i++) {
		var possibleCharacter = getRandomElement(getRandomElement(possibleCharacters));
		result.push(possibleCharacter);
	}

	//Each guaranteed character is spliced into a random index in result
	for (i = 0; i < guaranteedCharacters.length; i++) {
		result.splice(Math.random() * result.length, 1, guaranteedCharacters[i]);
	}

	//returns the result of the password generation as a string.
	return result.join('').toString();
}

// Write password to the #password input
function writePassword() {
	//sets password as string returned from generatePassword();
	var password = generatePassword();

	//Prevents value of passwordText from being set to "undefined" if password is undefined or null.
	if (password === undefined) {
		return;
	}

	//points to password id in HTML document
	var passwordText = document.querySelector('#password');

	//sets value of the password text in HTML to password defined by generatePassword()
	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
