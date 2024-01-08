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

//you can combine arrays using spread operators; in this case they total 85 characters
//var spreadChars = [...specialCharacters, ...numericCharacters, ...lowerCasedCharacters, ...upperCasedCharacters]

var numChars = prompt("Type a length for your password. It should have between 8 and 128 characters inclusive");

while (numChars < 8 || numChars > 128) {
  numChars = prompt("Your password length does not satisfy the security criteria. Please choose a number between 8 and 128 inclusive");
}

alert ("To fulfil security criteria, your password should contain a mixture of numbers, special characters and letters in both upper and lower case");

var incLower = confirm ("Would you like to include lowercase letters in your password?")
var incUpper = confirm ("Would you like to include uppercase letters in your password?")
var incNum = confirm ("Would you like to include numeric values in your password?")
var incSpec = confirm ("Would you like to include special characters in your password?")

// declare (?) an empty array to which you will add
var chosenChars = []

// Function to prompt user for password options
function getPasswordOptions(incLower, incUpper, incNum, incSpec) { //do I need numChars as a parameter/argument here?)
  if (incLower) {
    chosenChars = [...chosenChars, ...lowerCasedCharacters]; 
  } if (incUpper) {
    chosenChars = [...chosenChars, ...upperCasedCharacters];
  } if (incNum) {
    chosenChars = [...chosenChars,  ...numericCharacters];
  } if (incSpec) {
    chosenChars = [...chosenChars,  ...specialCharacters];
  } else // what is the condition if all confirms are answered in the negative? Does it need to be a WHILE here or above?
//do i need to return a result or array?


//how can I best see if this is working?
// console.log(chosenChars);
// }
// getPasswordOptions(true, true, true, true);


// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

for (let i = 0; i <numChars; index++) {
  let randomPass = [Math.floor(Math.random()*chosenChars.length)];
  
}




//I wrote this FUNCTION as I seemed to have some problems assigning random outputs to variables.
// function pickRand(allChars) {
//   var index = Math.floor(Math.random() * allChars.length);
//   return allChars[index];
// }
// var randomArray = pickRand(allChars); 
// var randomChoiceCharacter = randomArray[Math.floor(Math.random() * randomArray.length)] //again the problem of randomArray.length always equalling 1
// //console.log(randomChoiceCharacter) //this gives the whole array, as does substituting in the function name:
// //var randomChoiceCharacter = pickRand(allChars)[Math.floor(Math.random() * pickRand(allChars).length)] 


//Do I need a for loop to iterate * numChars-1 (as I will have specified the first character)? Do I then need a loop inside a loop if I make an array of arrays? 

//Otherwise, let me create an array of arrays i.e. a multidimensional array:

var allChars = [
  [specialCharacters],
  [numericCharacters],
  [lowerCasedCharacters],
  [upperCasedCharacters]
]

//So now I need to choose x number of random characters where x = numChars (picked from the input to the prompt)
//I will need to pick a character from allChars using a random outer and inner array index number with syntax [x] [y]
//BUT I CAN'T SEEM TO MAKE THE OUTER INDEX/INNER INDEX WAY WORK!
var outerIndex = Math.floor(Math.random() * allChars.length);
var innerArray = allChars[outerIndex];
var innerIndex = Math.floor(Math.random() * innerArray.length); //this is where the problem starts; innerIndex is 0, probably because innerArray.length seems to be 1; is this because it is ONE ARRAY????
var randomChar = innerArray[innerIndex];


//console.log(randomChar); // this gives a whole array preceded by number of elements only
//console.log(innerArray); // this gives a random array and number of elements e.g [Array(26)]
//console.log(innerIndex); //this is constantly giving zero = why? Probs because innerArray.length is somehow always 1
//console.log(allChars[outerIndex]); // this gives a random array and number of elements e.g [Array(26)]
//console.log(outerIndex); //this generates a random integer between 0 and 3 inclusive
//console.log(innerArray.length); // this is always 1
//console.log((innerArray[innerIndex])[innerIndex]); //gives a random first element of one of the four arrays (so A, a, @ or 0) because it's treating innerIndex as zero.
//innerArray[innerIndex] keeps logging the whole array in brackets, but without being prefixed with Array (and number of elements); if you change innerIndex to anything other than 0, it is undefined.






// Function to generate password with user input
function generatePassword() {

//is there one step to make the input value (n or u or l or s) a variable straight off rather than have the below else ifs? Do I need to convert to all lowercase for example (firstChar.toLowerCase) or use another method for case sensitivity?

 if (firstChar.toLowerCase() === 'n') {
    result = getRandom(numericCharacters) + randomChar *numChars //VERY ROUGH IDEA!  
 } else if (firstChar.toLowerCase() === 'u') {
  result = getRandom(upperCasedCharacters) + randomChar *numChars //VERY ROUGH IDEA!  
 } else if (firstChar.toLowerCase() === 'l') {
  result = getRandom(lowerCasedCharacters) + randomChar *numChars //VERY ROUGH IDEA!  
 } else if (firstChar.toLowerCase() === 's') {
  result = getRandom(specialCharacters) + randomChar *numChars //VERY ROUGH IDEA!  
 } else {} //condition if other character is entered

 return result; //DO I NEED ANY RETURNS ABOVE?? SHOULD I BE INTRODUCING THE VARIABLE 'PASSWORD' YET?

}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

