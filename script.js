// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword () {
  var passwordLength = window.prompt("How long you you like your password to be? (8-128 characters)")
  var integer = parseInt(passwordLength, 10);
  if (integer >= "8" && integer <= "128") {
    var prompt1 = window.prompt("Do you want uppercase letters? (yes or no)")  
    var upperCase = prompt1.toLowerCase();
    if (upperCase == "yes" || upperCase == "no") {
      var prompt2 = window.prompt("Do you want numbers? (yes or no)")
      var numeric = prompt2.toLowerCase();  
        if (numeric == "yes" || numeric == "no") {
          var prompt3 = window.prompt("Do you want special characters? (yes or no)")
          var characters = prompt3.toLowerCase();  
            if (characters == "yes" || characters == "no") {
              passwordWriter ();
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

function passwordWriter () {

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //querySelector replaces placeholder in HTML with passwordText?
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  writePassword();
});
