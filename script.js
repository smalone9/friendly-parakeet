// variables for four characters (nums, special, upper, lower)
var possibleNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var possibleUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var possibleLowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var possibleSymbols = "`~!@#$%^&*+".split("");

// Gen password to the #password input
var generateBtn = document.querySelector("#generate");

function writePassword() {
}
  //user input function
  function userInput() {
    // Choose character length
    // fix button generate
    var length = prompt(
      "How long do you want your password (8 - 128 characters)"
    );
    if (isNaN(length)) {
      alert("You need a value!");
      return;
    }
    if (length < 8 || length > 128) {
      alert("You need a value between 8 and 128");
      return;
    }
    // t or f variables
    var wantsNum = confirm("Do you want numbers?");
    var wantsUpperCase = confirm("Do you want Uppercase?");
    var wantsLowerCase = confirm("Do you want LowerCase?");
    var wantsSym = confirm("Do you want symbols?");
    if (!wantsNum && !wantsUpperCase && !wantsLowerCase && !wantsSym) {
      alert("You need a selection!");
      return;
    }
    var userChoices = {
      passwordLength: length,
      wantsNum: wantsNum,
      wantsUpperCase: wantsUpperCase,
      wantsLowerCase: wantsLowerCase,
      wantsSym: wantsSym
    };
    return userChoices;
  }

  // function to generate a random numeric value
  var randomCharacter = function (arr) {
    var value = Math.floor(Math.random() * arr.length);
    return arr[value];
  };

  // shuffle array
  // function shuffleArray(arr) {
  //   for (var i = arr.length - 1; i > 0; i++) {
  //     var j = Math.floor(Math.random() * (i + 1));
  //     var temp = arr[i];
  //     arr[i] = arr[j];
  //     arr[j] = temp;
  //   }
  //   return arr;
  // }

  function generatePassword() {
    var options = userInput();
    var possibleCharacters = [];
    var guaranteedCharacters = [];
    var result = [];

    if (options.wantsNum) {
      possibleCharacters = possibleCharacters.concat(possibleNum);
      guaranteedCharacters.push(randomCharacter(possibleNum));
    }

    if (options.wantsUpperCase) {
      possibleCharacters = possibleCharacters.concat(possibleUpperCase);
      guaranteedCharacters.push(randomCharacter(possibleUpperCase));
    }

    if (options.wantsLowerCase) {
      possibleCharacters = possibleCharacters.concat(possibleLowerCase);
      guaranteedCharacters.push(randomCharacter(possibleLowerCase));
    }

    if (options.wantsSym) {
      possibleCharacters = possibleCharacters.concat(possibleSymbols);
      guaranteedCharacters.push(randomCharacter(possibleSymbols));
    }
    console.log(guaranteedCharacters);
    console.log(possibleCharacters);

    var remainingCharacters = options.passwordLength - guaranteedCharacters.length;
    // for loop
    for (var i = 0; i < remainingCharacters; i++) {
      guaranteedCharacters.push(possibleCharacters[Math.floor(Math.random() * i)]);
      var finalPassword = guaranteedCharacters.join("");
    }
    console.log(finalPassword);
    console.log(result);
    
    return finalPassword;
  }

  // Overwrite values in result array, return result
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  // alert(generatePassword());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)