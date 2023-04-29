const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEls = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

const testData = [
  {
    question: "What is JavaScript?",
    a: "A programming language used for creating interactive websites",
    b: "A markup language used for defining the structure of web pages",
    c: "A database management system used for storing and retrieving data",
    d: "A networking protocol used for transmitting data over the internet",
    answer: "a"
  },
  {
    question: "Which of the following is NOT a data type in JavaScript?",
    a: "string",
    b: "boolean",
    c: "character",
    d: "number",
    answer:"c"
  },
  {
    question: "What is the purpose of the if statement in JavaScript?",
    a: "To loop through a block of code a certain number of times",
    b: "To define a function in JavaScript",
    c: "To execute a block of code if a specified condition is true",
    d: "To assign a value to a variable in JavaScript",
    answer:"c"
  },
  {
    question: "Which of the following is the correct way to declare a function in JavaScript?",
    a: "function myFunction() {}",
    b: "def myFunction() {}",
    c: "function = myFunction() {}",
    d: "function: myFunction() {}",
    answer: "a"
  },
  {
    question: "Which of the following is the correct way to comment out a line of code in JavaScript?",
    a: " <!-- This is a comment -->",
    b: "/* This is a comment */",
    c: "<!-- This is a comment -->",
    d: "// This is a comment",
    answer: "d"
  }
  
];

let currentTest = 0;
let score = 0;

loadTest()

function loadTest() {
  deselectAnswers()
  const currentTestData = testData[currentTest]
  questionEls.innerText = currentTestData.question
  a_text.innerText = currentTestData.a
  b_text.innerText = currentTestData.b
  c_text.innerText = currentTestData.c
  d_text.innerText = currentTestData.d
}

function deselectAnswers() {
  answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected() {
  let answer
  answerEls.forEach(answerEls => {
    if(answerEls.checked) {
      answer = answerEls.id
    }
  })
  return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
    if(answer === testData[currentTest].answer) {
      score++
    }

    currentTest++
    if(currentTest < testData.length) {
      loadTest()
    } else {
      quiz.innerHTML = `
      <h2>You answered ${score}/${testData.length} questions correctly</h2>
      <button onclick="location.reload()">Reload</button>
      `
    }
  }
}) 


