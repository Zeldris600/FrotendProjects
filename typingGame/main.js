let questions = [
  {
    q: "The most deadliest animal in the world?",
    a: "Mosquito",
  },
  {
    q: "Capital city of Morocco?",
    a: "Rabbat",
  },
  {
    q: "Most wins in WAFCON?",
    a: "Nigeria",
  },
  {
    q: "The most popular language for web development?",
    a: "JavaScript",
  },
  {
    q: "Used for styling web pages?",
    a: "CSS",
  },
  {
    q: "Who carries the nine-tailed fox?",
    a: "Naruto Uzimaki",
  },
  {
    q: "Name of the stone hashira in Demon Slayer Corp?",
    a: "Tengen",
  },
];
let inputs, out, score, ok, next, myQuestion, points, nbq;
function initUI() {
  inputs = document.getElementById("inputs");
  out = document.getElementById("questionOut");
  score = document.getElementById("score");
  ok = document.getElementById("submit");
  ok.addEventListener("click",checkAnswer)
  next = document.getElementById("pass1");
  next.addEventListener("click", gonext)
  selectQuestion()
  gonext()
}
self.addEventListener("load", initUI)
let  q = questions[Math.floor(Math.random() * questions.length)]
let selectQuestion = ()=>{
   
     questions = questions.filter(x => x.q !== q.q)
     out.innerHTML = q.q
 }


nbq = questions.length;
points = 0;
let check = () => {
  let st = questions.length;
  if (st == 0) {
    if (((points / nbq) * 100) >= 50) {
      alert("congrats");
    } else {
      alert("failed");
    }
    return true;
  } else {
    return false;
  }
};



let checkAnswer = ()=>{
    let answer = q.a
 if(answer.toLowerCase() === inputs.value.toLowerCase()){
     points++;
     score.innerHTML = `<h1>You have ${points} point`
     gonext()
 }else{
     alert("Wrong Answer try again!")
 }
}

let gonext = ()=>{
    if(check()){
        alert("Game Over")
    }else{
        selectQuestion()
    }
}
