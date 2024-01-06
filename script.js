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




// Function to prompt user for password options
function getPasswordOptions() {

  //should the below be within the function? Why do I need a function called getPasswordOptions? What does this suggest I should be asking?

  let numChars = prompt ("Type a length in for your password. It will need to have between 8 and 128 characters inclusive")
 
  if (numChars < 8 || numChars > 128) { //DO I NEED TO PUT SEPARATE BRACKETS FOR AN OR? DO I NEED A SEPARATE IF STATEMENT?)
    prompt ("Your password will not satisfy the security criteria for length. Pick a number between 8 and 128 inclusive") //do I need to name a new variable here? can I do let numChars = again?
  } else {
   alert ("To fulfill security criteria, your password will need to contain a mixture of numbers, special characters and letters in both upper and lower case");
   prompt ("Your password will not satisfy the security criteria for length. Pick a number between 8 and 128 inclusive") //is this redundant having this here? Should I loop?
  } 
  //can an alert be an else condition?

 //do i need some kind of THEN condition, or will it move onto the next step after OK is hit on the alert?

 let firstChar = prompt ("What type of character would you like your password to start with? Choose n for number, u for uppercase letter, l for lowercase letter and s for special character")
 

//is there one step to make the input value (n or u or l or s) a variable straight off rather than have the below else ifs? Do I need to convert to all lowercase for example (firstChar.toLowerCase) or use another method for case sensitivity?

 //doing these separately - and can I use the toLowerCase function in here?:
 //do these go in generatePassword section?

 if (firstChar.toLowerCase() == n) {
  return
    getRandom(numericCharacters) + randomChar *numChars //VERY ROUGH IDEA!  
 } else if (firstChar.toLowerCase() == u) {
  return
    getRandom(upperCasedCharacters) + randomChar *numChars //VERY ROUGH IDEA!  
 } else if (firstChar.toLowerCase() == l) {
  return
  getRandom(lowerCasedCharacters) + randomChar *numChars //VERY ROUGH IDEA!  
 } else if (firstChar.toLowerCase() == s) {
  return
    getRandom(specialCharacters) + randomChar *numChars //VERY ROUGH IDEA!  
 }


}


// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random())*arr.length];
}


//Is there any way of performing a fair getRandom * passwordLength which picks randomly from any of the four arrays?  Do I need a for loop to iterate * numChars-1 (as I will have specified the first character)? Do I then need a loop inside a loop if I make an array of arrays? 

//let me create an array of arrays i.e. a multidimensional array:

var allChars = [
  [specialCharacters],
  [numericCharacters],
  [lowerCasedCharacters],
  [upperCasedCharacters]
]

//So now I need to choose x number of characters where x = numChars (picked from the input to the prompt)

//I will need to pick a character from allChars using a random outer and inner array index number with syntax [x] [y]


let randomOuterIndex = [Math.floor(Math.random())*allChars.length] //why is this always returning 0? Or if you change it to show the whole array it only shows special characters (the zero index array?)

let chosenInnerArray = allChars[randomOuterIndex]
let randomInnerIndex = [Math.floor(Math.random())*chosenInnerArray.length]
let randomChar = randomOuterIndex[randomInnerIndex]



//is this corrected syntax??????
let randomOuterIndex = Math.floor(Math.random() * allChars.length);
let chosenInnerArray = allChars[randomOuterIndex];
let randomInnerIndex = Math.floor(Math.random() * chosenInnerArray.length);
let randomChar = chosenInnerArray[randomInnerIndex];

// Function to generate password with user input
function generatePassword() {

}

//I am currently generating the password in the getPasswordOptions section above - am I approaching these functions in the wrong way?

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

