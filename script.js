// Application code

var Characters = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  sp: "!\"#$%&'()*+",
}


//generate the password

var generatePassword = function() {
  var Confirm = window.confirm(
    "Hello and welcome to the random password generator. This site will generate a random password based on user defined rules.  Please press OK to get started. "
    );

    // if they press ok, let's start

    if (Confirm) {

   // length of password

   var passwordLengthFinal = function () {
    var passwordLength = (window.prompt("Please specify the number of characters preferred for your password between 8 and 128"));

    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a number between 8 and 128");
      return passwordLengthFinal();
    } else {
      return passwordLength;
    }
    
  }
  
  // converting password length into function to be called back later

  var passwordLengthActual = passwordLengthFinal();
  window.alert(" You have selected " + passwordLengthActual + " characters! ")
  

// password criteria set-up.  set the variables first

var selectedUppercase = true;
var selectedLowercase = true;
var selectedNumbers = true;
var selectedSpecial = true;

// prompts for password criteria
while (selectedUppercase === true && selectedLowercase === true && selectedNumbers === true && selectedSpecial === true) {
window.alert(" Please select at least one character type.");

// upper case
var selectedUppercase = window.confirm(" Would you like to include uppercase characters?  Press Ok for Yes and Cancel for no. ");
// lower case
var selectedLowercase = window.confirm(" Would you like to include lowercase characters? Press Ok for Yes and Cancel for no. ");
// numbers
var selectedNumbers = window.confirm(" Would you like to include numbers? Press Ok for Yes and Cancel for no. ");
// special characters
var selectedSpecial = window.confirm(" Would you like to include special characters? Press Ok for Yes and Cancel for no. ");
break;
}

// character selection from criteria prompts 

if (selectedUppercase) {
Characters.upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
} else {
  Characters.upper = "";
}
if (selectedLowercase) {
Characters.lower = "abcdefghijklmnopqrstuvwxyz";
} else {
  Characters.lower = "";
}
if (selectedNumbers) {
Characters.number = "0123456789";
} else {
  Characters.number = "";
}
if (selectedSpecial) {
Characters.sp = "!\"#$%&'()*+";
} else {
  Characters.sp = "";
}

// defining the selected characters so they can be called in the random generation loop

var selectedCharacters = Characters.upper + Characters.lower + Characters.number + Characters.sp;
console.log(selectedCharacters)

// character generation loop

var result = "";
    for (var i = 0; i <= passwordLengthActual - 1; i++) {
      result += selectedCharacters.charAt(Math.floor(Math.random() * selectedCharacters.length));
    }

    alert(" Thank you for using the password generator! Your password is " + result);
    console.log(result);

  var finalPassword = result;
  return finalPassword;
    }
 
};

//STARTER CODE!
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
    
