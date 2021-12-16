// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword () {
  var passwordLength = window.prompt("How long you you like your password to be? (8-128 characters)")
  var integer = parseInt(passwordLength, 10);
  if (integer >= "8" && integer <= "128") {
    var upperCase = window.prompt("Do you want uppercase letters? (yes or no)")  
    if (upperCase == "yes" || upperCase == "no") {
      var numeric = window.prompt("Do you want numbers? (yes or no)")
        if (numeric == "yes" || numeric == "no") {
          var characters = window.prompt("Do you want special characters? (yes or no)")
            if (characters == "yes" || characters == "no") {
              //Write pw builder here!
            } else {
              return;
            }
        } else {
          return;
        }
    } else {
      return;
    }
  } else {
    return;
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  writePassword();
});
