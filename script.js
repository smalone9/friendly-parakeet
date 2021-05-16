// Assignment code here
// variables for four characters (nums, special, upper, lower)
var possibleNums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var possibleUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var possibleLowerCase = "abcdefghijklmnopqrstuvwxyz" .split("");
var possibleSymbols = "`~!@#$%^&*+" .split("");

// function to generate a random numeric value
var randomCharacter = function(arr) {
  var value = Math.floor(Math.random() * arr.length);

  return arr [value];
};
console.log (randomCharacter (possibleSymbols) )
console.log (randomCharacter (possibleNums) )

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
