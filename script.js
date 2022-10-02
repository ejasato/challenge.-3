var generateBtn = document.querySelector("#generate");

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['!','"','#','$','%','&','/','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~',"'" ];

function generatePassword(){
//this prompts the user to pick how long and what goes into the password
  var passwordLength = prompt ("How long do you want your password?","Please enter a number bewteen 8 and 128");
  while (passwordLength < 8  || passwordLength > 128){
      var passwordLength = prompt ("Error, The password can only be between 8 and 128 characters long!","You can only enter a number between 8 and 128");
  }

  var characterQuestion = true;
  var possibleCharacter = [];
  var password = "";

  //this is to loop the type of character questions to make sure they pick at least one and also it puts the characters the user wants in their passcode into a single array
  while (characterQuestion){
  var passwordLowercase = confirm ("Would you like the password to include lowercase characters.");
  var passwordUppercase = confirm ("Would you like the password to include uppercase characters.");
  var passwordNumeric = confirm ("Would you like the password to include numeric characters.");
  var passwordSpecialcharacters = confirm ("Would you like the password to include special characters.");
 
  if (passwordLowercase){
    for (var i of lowerCase){
      possibleCharacter.push(i);
      characterQuestion = false;
    }
  }
  if (passwordUppercase){
    for (var i of upperCase){
      possibleCharacter.push(i);
      characterQuestion = false;

    }
  }
  if (passwordNumeric){
    for (var i of numbers){
      possibleCharacter.push(i);
      characterQuestion = false;
    }
  }
  if (passwordSpecialcharacters){
    for (var i of special){
      possibleCharacter.push(i);
      characterQuestion = false;
    }
  }
  if (characterQuestion){
    characterQuestion = confirm("You have to choose at least one of the four options for what kind of characters you want.");
  }
}
//this is to randomly select from the possibleCharacter array and put it into a string of passwordLength long
  for(var i = 0; i < passwordLength; i++){
    var nextCharacter = possibleCharacter[Math.floor(Math.random() * possibleCharacter.length)];
    var password = password.concat(nextCharacter);
  }
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
