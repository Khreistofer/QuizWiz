document.addEventListener("DOMContentLoaded", () => {
    createSquares();
    
    let guessedWords = [[]];
    let availableSpace = 1;
    let score = 0;
    let word;
    let guessedWordCount = 0;
    const words = [
        "began",
        "fable",
        "trunk",
        "oasis",
        "lunar",
        "flair",
        "swoop",
        "sting",
        "risky",
        "jolly",
        "glaze",
        "flame",
        "funky",
        "frost",
        "clasp",
        "whirl",
        "deity",
        "scram",
        "ditch",
        "fever",
        "gummy",
        "wreck",
        "fable",
        "lemon",
        "flare",
        "knack",
        "tulip",
        "chaos",
        "quell",
        "peach",
        "tweak",
        "razor",
        "yacht",
        "punch",
        "wince",
        "clown",
        "flock",
        "bliss",
        "juicy",
        "grape",
        "chive",
        "shack",
        "humor",
        "fable",
        "grasp",
        "climb",
        "funky",
        "frail",
        "silly",
        "pilot",
        "swoop"
      ];
    getNewWord();
    console.log(word);
    const text = document.getElementById("text");
  
    const keys = document.querySelectorAll(".keyboard-row button");
    
    function getNewWord(){
        let size = words.length;
        let rand = Math.floor(Math.random() * size);
        word = words[rand];
    }
    function getCurrentWordArr() {
      const numberOfGuessedWords = guessedWords.length;
      return guessedWords[numberOfGuessedWords - 1];
    }
  
    function updateGuessedWords(letter) {
      const currentWordArr = getCurrentWordArr();
  
      if (currentWordArr && currentWordArr.length < 5) {
        currentWordArr.push(letter);
  
        const availableSpaceEl = document.getElementById(String(availableSpace));
  
        availableSpace = availableSpace + 1;
        availableSpaceEl.textContent = letter;
      }
    }
  
    function getTileColor(letter, index) {
      const isCorrectLetter = word.includes(letter);
  
      if (!isCorrectLetter) {
        return "rgb(58, 58, 60)";
      }
  
      const letterInThatPosition = word.charAt(index);
      const isCorrectPosition = letter === letterInThatPosition;
  
      if (isCorrectPosition) {
        return "rgb(83, 141, 78)";
      }
  
      return "rgb(181, 159, 59)";
    }
  
    function handleSubmitWord() {
      const currentWordArr = getCurrentWordArr();
      if (currentWordArr.length !== 5) {
        window.alert("Word must be 5 letters");
        return;
      }
  
      const currentWord = currentWordArr.join("");
  
          const firstLetterId = guessedWordCount * 5 + 1;
          const interval = 200;
          currentWordArr.forEach((letter, index) => {
            setTimeout(() => {
              const tileColor = getTileColor(letter, index);
  
              const letterId = firstLetterId + index;
              const letterEl = document.getElementById(letterId);
              letterEl.classList.add("animate__flipInX");
              letterEl.style = `background-color:${tileColor};border-color:${tileColor}`;
            }, interval * index);
          });
  
          guessedWordCount += 1;

          if(currentWord === word){
            score = 70 - (guessedWordCount*10);
            text.textContent = "Congratulations you scored "+score;
          }
  
          if (guessedWords.length === 6) {
            text.textContent = `Sorry, you have no more guesses! The word is ${word}.`;
          }
  
          guessedWords.push([]);
        }
  
    function createSquares() {
      const gameBoard = document.getElementById("board");
  
      for (let index = 0; index < 30; index++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.classList.add("animate__animated");
        square.setAttribute("id", index + 1);
        gameBoard.appendChild(square);
      }
    }
  
    function handleDeleteLetter() {
      const currentWordArr = getCurrentWordArr();
      
      if(currentWordArr.length < 1){
        return;
      }
      const removedLetter = currentWordArr.pop(); 
      guessedWords[guessedWords.length - 1] = currentWordArr;
  
      const lastLetterEl = document.getElementById(String(availableSpace - 1));
  
      lastLetterEl.textContent = "";
      availableSpace = availableSpace - 1;
    }
  
    for (let i = 0; i < keys.length; i++) {
      keys[i].onclick = ({ target }) => {
        const letter = target.getAttribute("data-key");
        if (letter === "enter") {
          handleSubmitWord();
          return;
        }
  
        if (letter === "del") {
          handleDeleteLetter();
          return;
        }
  
        updateGuessedWords(letter);
      };
    }
});