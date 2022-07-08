
let word2,incorrects = [],inputs,resetBtn,hint,typingInput,wrongLetters,guessLeft,
  corrects = [],
  maxGuesses;
const wordList = [
  {
    word: "jpeg",
    hint: "a small image file format",
  },
  {
    word: "html",
    hint: "markup language for web pages",
  },
  {
    word: "css",
    hint: "used to style web pages",
  },
  {
    word: "google",
    hint: "famous search engine",
  },
  {
    word: "JavaScript",
    hint: "popular language for web development",
  },
  {
    word: "mars",
    hint: "a planet of our solar system",
  },
  {
    word: "gold",
    hint: "a yellow precious metal",
  },
  {
    word: "moon",
    hint: "a companion to the earth",
  },
  {
    word: "server",
    hint: "powerful tool for hosting software",
  },
];

function initUI(){
     inputs = document.querySelector(".inputs");
     resetBtn = document.querySelector(".reset-btn");
     hint = document.querySelector(".hint span");
     typingInput = document.querySelector(".typing-input");
     wrongLetters = document.querySelector(".wrong-letter span");
     guessLeft = document.querySelector(".guess-left span");
     resetBtn.addEventListener("click", pick_A_Word);
     typingInput.addEventListener("input", initGame);
}

function pick_A_Word() {
  let wordObj = wordList[Math.floor(Math.random() * wordList.length)];
  word2 = wordObj.word; // remove word from wordObj
  maxGuesses = 8;
  incorrects = [];
  corrects = [];
  console.log(word2);
  wrongLetters.innerText = incorrects;
  //Dynamically display key(hint) value on the DOM and remaining guesses
  hint.innerText = wordObj.hint;
  guessLeft.innerText = maxGuesses;
  //Dynamically display word on the Dom with required input boxes
  let html = "";
  for (let i = 0; i < word2.length; i++) {
    html += `<input type="text" disabled />`;
  }
  inputs.innerHTML = html;
  
}
// Get User pressed key
function initGame(e) {
  let key = e.target.value;
  // Get only alphabetical keys and prevent user from inputing correct and incorrect keys twice
  if (
    key.toLowerCase() != key.toUpperCase() &&
    !incorrects.includes(`${key}`) &&
    !corrects.includes(key)
  ) {
    console.log(key);
    if (word2.includes(key)) {
      for (let i = 0; i < word2.length; i++) {
        // Show matched letter(s) in corresponding input fields
        if (word2[i] === key) {
          corrects.push(key);
          inputs.querySelectorAll("input")[i].value = key;
        }
      }
    } else {
      maxGuesses--; // decrement guesses by one after every incorrect key
      incorrects.push(`${key}`); // adding space to key on display
      console.log("letter not found");
    }
  }
 
  guessLeft.innerText = maxGuesses;
  wrongLetters.innerText = incorrects;
  typingInput.value = "";

  setTimeout(() => {
    if (corrects.length === word2.length) {
      // When User guesses word correctly
      alert(`Congrats! You guessed correctly :  ${word2.toUpperCase()}`);
      pick_A_Word();
    } else if (maxGuesses < 1) {
      // User exhaust's all guess opportunities
      alert("Game over! You don't having any remaining guesses");
      for (let i = 0; i < word2.length; i++) {
        inputs.querySelectorAll("input")[i].value = word2[i];
      }
    }
  });
}



document.addEventListener("keydown", () => typingInput.focus());
