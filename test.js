let userInput = "seven123academy";
let characters = [];
for (let iterator = 0; iterator < userInput.length; iterator++) {
  console.log(userInput[iterator]);
  if (!+userInput[iterator]) {
    characters.push(userInput[iterator]);
  }
  // i++
}
userInput = " ";
console.log(characters);
characters.forEach((character) => (userInput += character));
console.log(userInput);

let user = [
  { name: "Kambang", gender: "male" },
  [54, 55, { isInstructor: true }],
  {
    isStudent: false,
    progress: [75, 83, 90],
    showProgress: function () {
     return console.log(this.progress);
    },
  },
];

// Q1: a) Write a snippet that shows the user's progress.
//     b) Write a snippet that alert's if the user is an instructor.

//a)

let checkProgress = user[2];
let check = checkProgress.showProgress();




/* for (let index = 0; index < user.length; index++) {
    if(user[index][2].isInstructor === true){
        alert('User is an instructor')
    }else alert('nope')
} */

if (user[1][2].isInstructor === true) {
  alert("User is an instructor");
}


