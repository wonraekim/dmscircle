const questions = [
  {
    word: "GLOBAL",
    hint: "예: GLOBAL의 반대는 무엇일까요?"
  },
  {
    word: "PATIENT",
    hint: "예: PATIENT의 반대 고객은 누구일까요?"
  },
  {
    word: "ONLINE",
    hint: "예: ONLINE의 반대 경험은 무엇일까요?"
  },
  {
    word: "PRODUCT",
    hint: "예: PRODUCT의 반대 사업 구조는 무엇일까요?"
  }
];

let currentIndex = 0;
const answers = [];

const currentWord = document.getElementById("currentWord");
const answerInput = document.getElementById("answerInput");
const nextBtn = document.getElementById("nextBtn");
const hintText = document.getElementById("hintText");
const quizCard = document.getElementById("quizCard");
const resultBox = document.getElementById("resultBox");
const summaryList = document.getElementById("summaryList");

function showQuestion() {
  currentWord.textContent = questions[currentIndex].word;
  hintText.textContent = questions[currentIndex].hint;
  answerInput.value = "";
  answerInput.focus();
}

function nextQuestion() {
  const answer = answerInput.value.trim();

  if (!answer) {
    alert("정반대 개념을 입력해 주세요.");
    return;
  }

  answers.push({
    from: questions[currentIndex].word,
    to: answer
  });

  currentIndex++;

  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizCard.classList.add("hidden");
  resultBox.classList.remove("hidden");

  summaryList.innerHTML = answers
    .map(item => `<div>${item.from} → ${item.to}</div>`)
    .join("");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

nextBtn.addEventListener("click", nextQuestion);

answerInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    nextQuestion();
  }
});

showQuestion();
