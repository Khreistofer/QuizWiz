const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName('choice'));
const imageContainer = document.querySelector('.img');
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

let img;
let currQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Lebanon",
        choice1: "https://www.worldometers.info/img/flags/small/tn_le-flag.gif",
        choice2: "https://www.worldometers.info/img/flags/small/tn_lg-flag.gif",
        choice3: "https://www.worldometers.info/img/flags/small/tn_sy-flag.gif",
        choice4: "https://www.worldometers.info/img/flags/small/tn_ym-flag.gif",
        answer: 1
    },
    {
        question: "Poland",
        choice1: "https://www.worldometers.info/img/flags/small/tn_au-flag.gif",
        choice2: "https://www.worldometers.info/img/flags/small/tn_id-flag.gif",
        choice3: "https://www.worldometers.info/img/flags/small/tn_mn-flag.gif",
        choice4: "https://www.worldometers.info/img/flags/small/tn_pl-flag.gif",
        answer: 4
    },
    {
        question: "Maldives",
        choice1: "https://www.worldometers.info/img/flags/small/tn_mr-flag.gif",
        choice2: "https://www.worldometers.info/img/flags/small/tn_mv-flag.gif",
        choice3: "https://www.worldometers.info/img/flags/small/tn_ly-flag.gif",
        choice4: "https://www.worldometers.info/img/flags/small/tn_mi-flag.gif",
        answer: 2
    },
    {
      question: "Algeria",
      choice1: "https://www.worldometers.info/img/flags/small/tn_ba-flag.gif",
      choice2: "https://www.worldometers.info/img/flags/small/tn_ag-flag.gif",
      choice3: "https://www.worldometers.info/img/flags/small/tn_mx-flag.gif",
      choice4: "https://www.worldometers.info/img/flags/small/tn_pk-flag.gif",
      answer: 2
  },
  {
    question: "South Sudan",
    choice1: "https://www.worldometers.info/img/flags/small/tn_su-flag.gif",
    choice2: "https://www.worldometers.info/img/flags/small/tn_palestine-flag.gif",
    choice3: "https://www.worldometers.info/img/flags/small/tn_ae-flag.gif",
    choice4: "https://www.worldometers.info/img/flags/small/tn_od-flag.gif",
    answer: 4
  },
  {
    question: "Turkey",
    choice1: "https://www.worldometers.info/img/flags/small/tn_tu-flag.gif",
    choice2: "https://www.worldometers.info/img/flags/small/tn_ts-flag.gif",
    choice3: "https://www.worldometers.info/img/flags/small/tn_sn-flag.gif",
    choice4: "https://www.worldometers.info/img/flags/small/tn_pk-flag.gif",
    answer: 1
  },
  {
    question: "Niger",
    choice1: "https://www.worldometers.info/img/flags/small/tn_ni-flag.gif",
    choice2: "https://www.worldometers.info/img/flags/small/tn_ng-flag.gif",
    choice3: "https://www.worldometers.info/img/flags/small/tn_iv-flag.gif",
    choice4: "https://www.worldometers.info/img/flags/small/tn_in-flag.gif",
    answer: 2
  },
  {
    question: "Luxembourg",
    choice1: "https://www.worldometers.info/img/flags/small/tn_ls-flag.gif",
    choice2: "https://www.worldometers.info/img/flags/small/tn_uz-flag.gif",
    choice3: "https://www.worldometers.info/img/flags/small/tn_sl-flag.gif",
    choice4: "https://www.worldometers.info/img/flags/small/tn_lu-flag.gif",
    answer: 4
  },
  {
    question: "Malawi",
    choice1: "https://www.worldometers.info/img/flags/small/tn_mi-flag.gif",
    choice2: "https://www.worldometers.info/img/flags/small/tn_ml-flag.gif",
    choice3: "https://www.worldometers.info/img/flags/small/tn_mp-flag.gif",
    choice4: "https://www.worldometers.info/img/flags/small/tn_pp-flag.gif",
    answer: 1
  },
  {
    question: "St. Vincent Grenadines",
    choice1: "https://www.worldometers.info/img/flags/small/tn_vc-flag.gif",
    choice2: "https://www.worldometers.info/img/flags/small/tn_ns-flag.gif",
    choice3: "https://www.worldometers.info/img/flags/small/tn_tz-flag.gif",
    choice4: "https://www.worldometers.info/img/flags/small/tn_to-flag.gif",
    answer: 1
  },
  {
    question: "Vanuatu",
    choice1: "https://www.worldometers.info/img/flags/small/tn_ug-flag.gif",
    choice2: "https://www.worldometers.info/img/flags/small/tn_nh-flag.gif",
    choice3: "https://www.worldometers.info/img/flags/small/tn_tt-flag.gif",
    choice4: "https://www.worldometers.info/img/flags/small/tn_mz-flag.gif",
    answer: 2
  },
  {
    question: "Kenya",
    choice1: "https://www.worldometers.info/img/flags/small/tn_et-flag.gif",
    choice2: "https://www.worldometers.info/img/flags/small/tn_jm-flag.gif",
    choice3: "https://www.worldometers.info/img/flags/small/tn_ke-flag.gif",
    choice4: "https://www.worldometers.info/img/flags/small/tn_ct-flag.gif",
    answer: 3
  },
  {
    question: "El Salvador",
    choice1: "https://www.worldometers.info/img/flags/small/tn_ar-flag.gif",
    choice2: "https://www.worldometers.info/img/flags/small/tn_bc-flag.gif",
    choice3: "https://www.worldometers.info/img/flags/small/tn_es-flag.gif",
    choice4: "https://www.worldometers.info/img/flags/small/tn_gt-flag.gif",
    answer: 3
  },
  {
    question: "Liberia",
    choice1: "https://www.worldometers.info/img/flags/small/tn_my-flag.gif",
    choice2: "https://www.worldometers.info/img/flags/small/tn_us-flag.gif",
    choice3: "https://www.worldometers.info/img/flags/small/tn_li-flag.gif",
    choice4: "https://www.worldometers.info/img/flags/small/tn_ws-flag.gif",
    answer: 3
  }
]
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () =>{
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () =>{
    if(questionCounter >= MAX_QUESTIONS || availableQuestions.length === 0) {
        return window.location.assign("/result?result="+score);
    } //redirect to the result page
    startTimer();
    questionCounter++;
    questionCounterText.innerText = questionCounter+" / "+MAX_QUESTIONS;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currQuestion = availableQuestions[questionIndex];
    question.innerText = currQuestion.question;
    if(currQuestion.image)
    {
        img = document.createElement("img");
        img.src = currQuestion.image;
        imageContainer.appendChild(img);
    }


    choices.forEach(choice => {
        let image = document.createElement("img");
        const number = choice.dataset['number'];
        image.src = currQuestion['choice'+number];
        console.log(image);
        choice.appendChild(image);
    });
    availableQuestions.splice(questionIndex,1);
    acceptingAnswers = true;
}

choices.forEach( choice =>{
    choice.addEventListener("click", e =>{
        if(!acceptingAnswers) return;
        acceptingAnswers = false;
        let selectedChoice = e.target;
        if(e.target == choice.firstChild)
            selectedChoice = choice;
        const selectedAnswer = selectedChoice.dataset["number"];
        const correctChoice = choices[currQuestion.answer-1];
        const classToApply = selectedAnswer == currQuestion.answer ? 'correct' : 'incorrect';
        selectedChoice.parentElement.classList.add(classToApply);
        correctChoice.parentElement.classList.add('correct');
        if(classToApply === 'correct'){
            incrementScore(CORRECT_BONUS);
        }
        setTimeout( () => {
            if(classToApply === 'incorrect')
                correctChoice.parentElement.classList.remove('correct');
            selectedChoice.parentElement.classList.remove(classToApply);
            choices.forEach(choice => {
                choice.removeChild(choice.firstChild);
            });
            resetTimer();
            getNewQuestion();
        },1000);
    });
});

incrementScore = num =>  {
    score += num;
    scoreText.innerText = score;
}

// timer 
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "blue"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("timer").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

//startTimer();
function resetTimer(){
    clearInterval(timerInterval);
    timePassed = 0;
    timeLeft = TIME_LIMIT;
    remainingPathColor = COLOR_CODES.info.color;
}

function onTimesUp() {
    const correcetChoice = choices[currQuestion.answer-1];
    correcetChoice.parentElement.classList.add('correct');
    setTimeout( () => {
        correcetChoice.parentElement.classList.remove('correct');
        choices.forEach(choice => {
            if(choice.firstChild)
                choice.removeChild(choice.firstChild);
        });
        resetTimer();
        getNewQuestion();
    },1000);
}

function startTimer() {
    timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
   } else {
    document.getElementById("base-timer-path-remaining").classList.remove(alert.color);
    document.getElementById("base-timer-path-remaining").classList.remove(warning.color);
    document.getElementById("base-timer-path-remaining").classList.add(info.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

startGame();