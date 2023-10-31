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
//My pseudocode
//prompt the user to enter a password length
  //parseInt the promot to convert to number
  //check if users input is a number, >8 and <128 characters
  //if conditions don't match, alert the user of the conditions

//write confirm statements and store in a variable asking: 
  //1. use lowercase?
  //2. use uppercase?
  //3. whether to include numbers?
  //4. use of special characters?
  //Write a condition so that at least one of the character types is selected - use an if statement here

//Have variables that will hold all of the conditions that have been selected - can make this an object as the inputs will all be related to the password created

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = parseInt(prompt("Enter the length you would like your password to be: ")); // issue a prompt via a variable asking length of password. ParsenInt this prompt into a number as what user returns will be a string.
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength >128) {
    alert("Password length incorrect! Password length must be a number between 8 and 128 characters.");
  } //if statement to to check password length to make sure it is more than 8 and less than 128 and to ensure it is a number.

  //variables to hold the responses of user for the different character types
  var forLowerCase = confirm("Do you want to include lower case?");
  var forUpperCase = confirm("Do you want to include upper case?");
  var forNumbers = confirm("Do you want to include numbers?");
  var forSpecialCharacters = confirm("Do you want to include special characters?");
  
  if(!forLowerCase && !forUpperCase && !forNumbers && forSpecialCharacters) {
    alert("Please select at least one of the character types to proceed.");
  }



}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

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









