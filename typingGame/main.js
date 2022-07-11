 let questions = [{
     q: "The most deadliest animal in the world?",
     a: "Mosquito"
 },{
     q: "Capital city of Morocco?",
     a: "Rabbat"
 },{
    q: "Most wins in WAFCON?",
    a: "Nigeria"
},{
    q: "The most popular language for web development?",
    a: "JavaScript"
},{
    q: "Used for styling web pages?",
    a: "CSS"
},{
    q: "Who carries the nine-tailed fox?",
    a: "Naruto Uzimaki"
},{
    q: "Name of the stone hashira in Demon Slayer Corp?",
    a: "Tengen"
}];
let inputs,questionOut,score,submit,pass,myQuestion;
function initUI(){
    inputs = document.getElementById("inputs");
    questionOut = document.getElementById("question");
    score = document.getElementById("score");
    submit = document.getElementById("submit");
    pass = document.getElementById("pass1");
    console.log("yes,I'M WORKING!");
    getQuestion();
}

if (pass) {
    pass.addEventListener("click",()=>console.log("found element"))
}

/* pass.addEventListener("click", getQuestion); */
self.addEventListener("load",initUI)

let question2 = questions[Math.floor(Math.random() *questions.length)]
function getQuestion(){
    myQuestion = question2.q
    /* console.log(myQuestion) */
    let out = `<h2>${myQuestion}</h2>`;
    questionOut.innerHTML= out;
}

function getAnswer(){
  let  myAnswer = question2.a
  inputs.value
  let score2= []
  if (inputs.value ==myAnswer) {
      score2.push(score2++)
    score.innerHTML = `Points: <h1>${score2}</h1>`
    inputs.value = "";
    }
}



 function pick(){
    let q3 = questions[Math.floor(Math.random() *questions.length)];
    q4 = q3.a
    q5 = q3.q
} 

