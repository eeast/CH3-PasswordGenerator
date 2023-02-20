// Assignment code here
const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const specialCharacters = ['~','`','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}',']','|','\\',':',';','"',"'",'<',',','>','.','?','/'];

const optionArrays = [lowerCase, upperCase, numbers, specialCharacters];

var promptPasswordLength = function() {
  var userInput = window.prompt("How long would you like your password to be? Please select a value between 8 and 128 characters long.");
  if (isNaN(userInput) === false && userInput >= 8 && userInput <= 128) {
    return Number(userInput);
  } else {
    window.alert("Please enter only a number between 8 and 128.");
    return promptPasswordLength();
  }
};

var promptLowerCase = function() {
  var userInput = window.prompt("Do you want to include lowercase letters in your password? (Y/N)");
  userInput = userInput.toUpperCase();
  if (userInput != "Y" && userInput != "N") {
    window.alert("Please enter either 'Y' for yes, or 'N' for no.");
    return promptLowerCase();
  } else if (userInput === "Y") {
    return true;
  } else {
    return false;
  }
};

var promptUpperCase = function() {
  var userInput = window.prompt("Do you want to include uppercase letters in your password? (Y/N)");
  userInput = userInput.toUpperCase();
  if (userInput != "Y" && userInput != "N") {
    window.alert("Please enter either 'Y' for yes, or 'N' for no.");
    return promptUpperCase();
  } else if (userInput === "Y") {
    return true;
  } else {
    return false;
  }
};

var promptNumeric = function() {
  var userInput = window.prompt("Do you want to include numbers in your password? (Y/N)");
  userInput = userInput.toUpperCase();
  if (userInput != "Y" && userInput != "N") {
    window.alert("Please enter either 'Y' for yes, or 'N' for no.");
    return promptNumeric();
  } else if (userInput === "Y") {
    return true;
  } else {
    return false;
  }
};

var promptSpecialCharacters = function() {
  var userInput = window.prompt("Do you want to include special characters in your password? (Y/N)");
  userInput = userInput.toUpperCase();
  if (userInput != "Y" && userInput != "N") {
    window.alert("Please enter either 'Y' for yes, or 'N' for no.");
    return promptSpecialCharacters();
  } else if (userInput === "Y") {
    return true;
  } else {
    return false;
  }
};

var createPassword = function(pwLen, options) {
  var result = "";
  for (var i = 0; i < pwLen; i++) {
    var category = Math.floor(Math.random() * 4);
    while (options[category] !== true) {
      category = category = Math.floor(Math.random() * 4);
    }
    result += optionArrays[category][Math.floor(Math.random() * optionArrays[category].length)];
  }
  return result;
};

var generatePassword = function() {
  window.alert("Let's create your password!\n\nFirst, please answer a few questions about your password criteria...");

  // prompt for length of password (8-128)
  var passwordLength = promptPasswordLength();

  // prompt for lowercase
  var hasLowerCase = promptLowerCase();

  // prompt for uppercase
  var hasUpperCase = promptUpperCase();

  // prompt for numeric
  var hasNumerals = promptNumeric();

  // prompt for special characters
  var hasSpecialCharacters = promptSpecialCharacters();

  // repeat criteria selection if not at least one true value
  while (!hasLowerCase && !hasUpperCase && !hasNumerals && !hasSpecialCharacters) {
    window.alert("Please select at least one character option to generate a password!");
    hasLowerCase = promptLowerCase();
    hasUpperCase = promptUpperCase();
    hasNumerals = promptNumeric();
    hasSpecialCharacters = promptSpecialCharacters();
  }
  if (window.confirm("You have chosen to create a password that is " + passwordLength + " characters in length.\n\nYour password will contain:" + 
  `${hasLowerCase ? "\nLower Case Letters" : ""}` + 
  `${hasUpperCase ? "\nUpper Case Letters" : ""}` + 
  `${hasNumerals ? "\nNumbers" : ""}` + 
  `${hasSpecialCharacters ? "\nSpecial Characters" : ""}`
  )) {
    window.alert("Creating your password!");
    var generatedPassword = createPassword(passwordLength, [hasLowerCase, hasUpperCase, hasNumerals, hasSpecialCharacters]);
    window.alert("Your new password is:\n" + generatedPassword);
    return generatedPassword;
  } else {
    window.alert("Password generation canceled.");
    return "";
  }
};

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
