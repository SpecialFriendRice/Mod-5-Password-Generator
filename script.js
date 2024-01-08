//* Generate a password when the button is clicked
// * Present a series of prompts for password criteria
//   * Length of password
//     * At least 8 characters but no more than 128.
// * Character types
//   * Lowercase
//   * Uppercase
//   * Numeric
//   * Special characters ($@%&*, etc)
// * Code should validate for each input and at least one character type should be selected
// * Once prompts are answered then the password should be generated and displayed in an alert or written to the page


// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

var numChars = prompt("Type a length for your password. It should have between 8 and 128 characters inclusive");

while (numChars < 8 || numChars > 128) {
  numChars = prompt("Your password length does not satisfy the security criteria. Please choose a number between 8 and 128 inclusive");
}

alert ("To fulfil security criteria, your password should contain a mixture of numbers, special characters and letters in both upper and lower case");


var incLower = confirm ("Would you like to include lowercase letters in your password?")
var incUpper = confirm ("Would you like to include uppercase letters in your password?")
var incNum = confirm ("Would you like to include numeric values in your password?")
var incSpec = confirm ("Would you like to include special characters in your password?")
while (!incLower && !incUpper && !incNum && !incSpec) {
  alert ("Please pick at least one set of characters");
}

// how do I get the above while loop to step through the prompts again? By creating a function?

//** OR SHOULD I CHECK IF ALL FOUR CONDITIONALS ARE FALSE BY USING THE LENGTH OF THE RESULTING chosenCharsFinal array i.e. if chosenCharsFinal.lenth - 0? **



// declare (?) an empty array to which you will add
var chosenChars = []

//create an array of chosen characters to include in password using spread operators and the ternary operator. Note that Xpert Teaching Assistant gives an example where the array you want to add on is in square brackets - take them out as you don't want to add it as an array, just its contents
var chosenCharsB = [...chosenChars, ...(incLower ? lowerCasedCharacters : [])]; 
var chosenCharsC = [...chosenCharsB, ...(incUpper ? upperCasedCharacters : [])]; 
var chosenCharsD = [...chosenCharsC, ...(incNum ? numericCharacters : [])]; 
var chosenCharsFinal = [...chosenCharsD, ...(incSpec ? specialCharacters : [])]; 

// STARTER Function to prompt user for password options
function getPasswordOptions() {

}

// STARTER Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}


var yourPassword = "";
for (let i = 0; i <numChars; i++) {
  var randomIndex = Math.floor(Math.random() *chosenCharsFinal.length);
  yourPassword += chosenCharsFinal[randomIndex];
}


// STARTER Function to generate password with user input
function generatePassword() {

}

// STARTER Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// STARTER Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = yourPassword; //this is the only bit of STARTER code I plugged my values into!
}

// STARTER Add event listener to generate button
generateBtn.addEventListener('click', writePassword);






