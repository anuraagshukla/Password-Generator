function passGen(){
// let pass = document.getElementById("pass");

let passLength = document.getElementById("rangeBar").value;
var chars = "1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var password = "";
for (let i = 0; i <= passLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
         document.getElementById("pass").value = password;
        //  return false
  }

  document.getElementById("getPassword").addEventListener("click",passGen);





