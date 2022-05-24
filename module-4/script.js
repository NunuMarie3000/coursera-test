// loop over an array of names and print out either a hello or goodbye to that name to the browser console. If the name starts with a letter j or J, you are to print out Goodbye JSomeName. If the name starts with any other letter, you are to print out Hello SomeName

let friendArray = [];
friendArray[0] = "Storm";
friendArray[1] = "JJ";
friendArray[2] = "Shea";
friendArray[3] = "Massi";

// console.log(friendArray);

for (name in friendArray){
  if (friendArray[name].charAt(0) === "J"){
    console.log("Goodbye " + friendArray[name]);
  }else{
  console.log("Hello " + friendArray[name]);
  }
}
