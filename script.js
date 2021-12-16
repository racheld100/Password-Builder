// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword () {
  var characters = "";
  var passwordLength = window.prompt("How long would you you like your password to be? (8-128 characters)")
  var integer = parseInt(passwordLength, 10);
  if (integer < "8" || integer > "128") {
    return;
  }
  var prompt1 = window.prompt("Do you want lowercase letters? (yes or no)")
  var lowerCase = prompt1.toLowerCase();
  if (lowerCase == "yes") {
  characters = characters.concat("abcdefghijklmnopqrstuvwxyz");    
  } else if (lowerCase != "no") {
    return;
  }
  var prompt2 = window.prompt("Do you want uppercase letters? (yes or no)")  
  var upperCase = prompt2.toLowerCase();
  if (upperCase == "yes") {
    var characters = characters.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  } else if (upperCase != "no") {
    return;
  }
  var prompt3 = window.prompt("Do you want numbers? (yes or no)")
  var numeric = prompt3.toLowerCase();  
  if (numeric == "yes") {
    var characters = characters.concat("0123456789"); 
  } else if (numeric != "no") {
    return;
  }
  var prompt4 = window.prompt("Do you want special characters? (yes or no)")
  var specialCharacters = prompt4.toLowerCase();  
  if (specialCharacters == "yes") {
    var characters = characters.concat("!#$%&*+-/=<>?@[]\^_{}|~");
  } else if (specialCharacters != "no") {
    return;
  }
  // for (let )
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
