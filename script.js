// Assignment code here
var generateBtn = document.querySelector("#gen");

// variables for four characters (nums, special, upper, lower)
var possibleNums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var possibleUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var possibleLowerCase = "abcdefghijklmnopqrstuvwxyz" .split("");
var possibleSymbols = "`~!@#$%^&*+" .split("");
var allChars = possibleNums + possibleUpperCase + possibleLowerCase + possibleSymbols;
var chosenChar = "";

// Gen password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Choose character length
var length = prompt("How long do you want your password (8 - 128 characters)");
if(isNaN(length)){
  alert("You need a value!");
}
if(length<8 || length>128){
  alert("You need a value between 8 and 128");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

// function to generate a random numeric value
var randomCharacter = function(arr) {
  var value = Math.floor(Math.random() * arr.length);

  return arr [value];
};
console.log (randomCharacter (possibleSymbols) )
console.log (randomCharacter (possibleNums) )

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

alert(generatePassword());



