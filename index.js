const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

//const p = document.createElement("div")

const appendQuestion = function(question) {
  document.querySelector(".question-container").innerHTML = question.questionText;
}

const askQuestionThen = function(time) {
  question = questions[0];
  appendQuestion(question);
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(question)
    }, time )
  });
}

const removeQuestion = function() {
  return new Promise(function(question) {
    document.querySelector(".question-container").innerHTML = "";
    toggleTrueAndFalseButtons();
  })
}

const askQuestionThenRemoveQuestion = function() {
    return askQuestionThen(1000).then(removeQuestion)
}

const trueAndFalseButtons = function() {
  return document.querySelector(".true-false-list").querySelectorAll(".btn")
}

const toggleTrueAndFalseButtons = function() {
  trueAndFalseButtons().forEach(function(btn){
    btn.classList.toggle("hide");
  })
}

const displayQuestionOnClick = function() {
  let btn = document.querySelector('a') //this is the main 'Ask' button
 return btn.addEventListener('click', () => {
   toggleTrueAndFalseButtons()
   askQuestionThenRemoveQuestion(5000)
 })
}
