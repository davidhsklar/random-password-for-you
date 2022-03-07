
var Characters = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  sp: "!\"#$%&'()*+",
  reset: function () {
    this.upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    this.lower = "abcdefghijklmnopqrstuvwxyz",
    this.number = "0123456789",
    this.sp = "!\"#$%&'()*+" 
  }
}


//generate the password

var generatePassword = function() {
  var Confirm = window.confirm(
    "Welcome to the Password Generator.  Please press OK to get started. "
    );
    //starts prompts on true answer

    if (Confirm) {

   //length of password

   var passLengthFinal = function () {
    var passLength = (window.prompt("Please specify the number of characters preferred for your password between 8 and 128"));

    if (isNaN(passLength) || passLength < 8 || passLength > 128) {
      alert("Please enter only a NUMBER between 8 and 128");
      return passLengthFinal();
    } else {
      return passLength;
    }
    
  }
  
  //storing password length in variable to be called back
  var passLengthActual = passLengthFinal();
  window.alert(" You have selected " + passLengthActual + " characters! ")
  

//variables for password criteria

var confirmUppercase = true;
var confirmLowercase = true;
var confirmNumbers = true;
var confirmSpecial = true;

// prompts for password criteria
while (confirmUppercase === true && confirmLowercase === true && confirmNumbers === true && confirmSpecial === true) {
window.alert(" Please select at least one character type.");
var confirmUppercase = window.confirm(" Would you like to include uppercase characters? ");
var confirmLowercase = window.confirm(" Would you like to include lowercase characters? ");
var confirmNumbers = window.confirm(" Would you like to include numbers? ");
var confirmSpecial = window.confirm(" Would you like to include special characters? ");
break;
}

// character selection 
if (confirmUppercase) {
Characters.upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
} else {
  Characters.upper = "";
}
if (confirmLowercase) {
Characters.lower = "abcdefghijklmnopqrstuvwxyz";
} else {
  Characters.lower = "";
}
if (confirmNumbers) {
Characters.number = "0123456789";
} else {
  Characters.number = "";
}
if (confirmSpecial) {
Characters.sp = "!\"#$%&'()*+";
} else {
  Characters.sp = "";
}

// setting availble character list for generation
var characterList = Characters.upper + Characters.lower + Characters.number + Characters.sp;
console.log(characterList)

//character generation code

var result = "";
    for (var i = 0; i <= passLengthActual - 1; i++) {
      result += characterList.charAt(Math.floor(Math.random() * characterList.length));
    }

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
    
