// variables for four characters (nums, special, upper, lower)
var possibleNums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var possibleUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var possibleLowerCase = "abcdefghijklmnopqrstuvwxyz" .split("");
var possibleSymbols = "`~!@#$%^&*+" .split("");

// Gen password to the #password input

//user input function
function userInput() {
  // Choose character length
  var length = prompt("How long do you want your password (8 - 128 characters)");
  if(isNaN(length)){
  alert("You need a value!");
  return;
  }
  if(length<8 || length>128){
  alert("You need a value between 8 and 128");
  return;
  }
  // t or f variables
  var wantsNums = confirm("Do yo want numbers?");
  var wantsUpperCase = confirm("Do yo want Uppercase?");
  var wantsLowerCase = confirm("Do yo want LowerCase?");
  var wantsSym = confirm("Do yo want symbols?");
  if(!wantsNums && !wantsUpperCase && !wantsLowerCase && !wantsSym) {
    alert("You need a selection!");
    return;
  }
  var userChoices = {
    passwordLength: length,
    wantsNums,
    wantsUpperCase,
    wantsLowerCase,
    wantsSym,
  }
  return userChoices;
}
// Add event listener to generate button

// function to generate a random numeric value
var randomCharacter = function(arr) {
  var value = Math.floor(Math.random() * arr.length);

  return arr [value];
};

// shuffle array
function shuffleArray(arr) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i +1));
    var temp = array[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

function generatePassword() {
  var options = userInput();
  var possibleCharacters = [];
  var guaranteedCharacters = [];
  var result = [];

  if(options.wantsNums){
    possibleCharacters = possibleCharacters.concat(possibleNums);
    guaranteedCharacters.push(randomCharacter(possibleNums));
  }
  // repeat for other chars

  // for loop
  for (var i = 0; i < options.passwordLength; i++) {
    result.push(randomCharacter(possibleCharacters));
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
alert(generatePassword());
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



