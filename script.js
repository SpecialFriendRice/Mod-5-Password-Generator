//OUTLINE OF README:
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


// STARTER Array of special characters to be included in password
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

// STARTER Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// STARTER Array of lowercase characters to be included in password
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

// STARTER Array of uppercase characters to be included in password
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

// STARTER Function to prompt user for password options
function getPasswordOptions() {
  var incLower = confirm ("Would you like to include lowercase letters in your password?")
  var incUpper = confirm ("Would you like to include uppercase letters in your password?")
  var incNum = confirm ("Would you like to include numeric values in your password?")
  var incSpec = confirm ("Would you like to include special characters in your password?")


  //I started with the below as a while loop with a break, located later on in the code, but the if loop with a return placed here exits the function so user starts from the top which is a simpler solution
  if(!incLower && !incUpper && !incNum && !incSpec) {
    alert ("Please pick at least one set of characters");
    return;
  }

  // declare (?) an empty array to temporarily hold the growing dataset of characters
  var tempChars = [];
  
  // push additional elements from the character arrays in to the existing one using an if loop. Using the spread operator... adds in each character rather than the array as a whole
  if(incLower === true) {
    tempChars.push(...lowerCasedCharacters)
  }

  if(incUpper === true) {
    tempChars.push(...upperCasedCharacters)
  }

  if(incNum === true) {
    tempChars.push(...numericCharacters)
  }

  if(incSpec === true) {
    tempChars.push(...specialCharacters)
  }
  
  return tempChars;

  //Previously tried the below method with spread/ternary operators to create an array of chosen characters. But not happy that chosenChars variable needs to change each time - not sure if code is right. Used the above if loop/push function instead
  // var chosenCharsB = [...chosenChars, ...(incLower ? lowerCasedCharacters : [])]; 
  // var chosenCharsC = [...chosenCharsB, ...(incUpper ? upperCasedCharacters : [])]; 
  // var chosenCharsD = [...chosenCharsC, ...(incNum ? numericCharacters : [])]; 
  // var chosenCharsFinal = [...chosenCharsD, ...(incSpec ? specialCharacters : [])]; 

}

// STARTER Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

// STARTER Function to generate password with user input
function generatePassword() {
  var numChars = prompt("Type a length for your password. It should have between 8 and 128 characters inclusive");
 
 // I used a while loop at first but the if loop with a return here takes the user back to the start of the process, which is a simpler way of taking user back to start if user input doesn't fit criteria
  if(numChars < 8 || numChars > 128) {
    alert("Password must be longer than 8 characters or less than 128 characters.");
    return;
  }
  
  alert ("To fulfil security criteria, your password should contain a mixture of numbers, special characters and letters in both upper and lower case");
  
  // Chosen character set:
  var chosenChars = getPasswordOptions();
  
  // Create the password with a for loop and the Math.random function
  var yourPassword = "";
  for (let i = 0; i <numChars; i++) {
    var randomIndex = Math.floor(Math.random() * chosenChars.length);
    yourPassword += chosenChars[randomIndex];
  }

  return yourPassword;
}

// STARTER Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// STARTER Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector('#password');

  passwordText.value = password; 
}

// STARTER Add event listener to generate button
generateBtn.addEventListener('click', writePassword);






