// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "?", "<", ">"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmLength = "";
var confirmUppercase;
var confirmLowercase;
var confirmSpecialCharacter;
var confirmNumber;

// Write password to the #password input
function generatePassword () {
  var confirmLength = window.prompt("How many characters would you like your password to be?");
  }

while (confirmLength <= 7 || confirmLength >= 128) {
    alert ("Password must be between 8-128 characters. Please type a number");
    var confirmLength = prompt("How many characters would you like your password to be?");
    }

    var confirmSpecialCharacter = confirm ("Click OK if you would like special characters in your password.");
    var confirmNumber = confirm("Click OK if you would like numbers in your password.");
    var confirmLowercase = confirm("Click OK if you would like lowercase letters in your password.");
    var confirmUppercase = confirm("Click OK if you would like uppercase letters in your password.");

      while (confirmSpecialCharacter === false && confirmNumber === false && confirmLowercase === false && confirmUppercase === false) {
        alert("You must choose at least one criteria value");
        var confirmSpecialCharacter = confirm ("Click OK if you would like special characters in your password.");
        var confirmNumber = confirm("Click OK if you would like numbers in your password.");
        var confirmLowercase = confirm("Click OK if you would like lowercase letters in your password.");
        var confirmUppercase = confirm("Click OK if you would like uppercase letters in your password.");
    }

    var passwordChoices = []
    if (confirmSpecialCharacter) {
      passwordChoices = passwordChoices.concat(specialCharacters)
    }
    if (confirmNumber) {
      passwordChoices = passwordChoices.concat(numbers)
    }
    if (confirmLowercase) {
      passwordChoices = passwordChoices.concat(alphaLower)
    }
    if (confirmUppercase) {
      passwordChoices = passwordChoices.concat(alphaUpper)
    }
      console.log (passwordChoices)
      var generatedPassword = ""
      for (var i = 0; i < confirmLength; i++) {
        generatedPassword = generatedPassword + passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
        alert(generatedPassword)
      }

    var passwordElement = document.getElementById ("password")
    passwordElement.innerHTML = generatedPassword

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
} 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
