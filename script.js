// Quiz data
const quizData = [
  {
    question: 'JavaScript is used for adding:',
      a: "Styling and layout to websites.",
      b:"Interactivity and dynamic behavior to websites.",
      c:" Database management to websites.",
      d:" Networking capabilities to websites.",
    correct: "b"
  },
  {
    question: 'JavaScript allows dynamic modification of the:',
      a:" HTML Document Object Model.",
      b:" CSS stylesheets.",
      c:" Server configuration.",
      d:" Web server logs.",
    correct: 'a'
  },
  {
    question: 'JavaScript is the foundation for building:',
      a: "Only server-side web applications.",
      b: "Only client-side web applications.",
      c:" Both server-side and client-side web applications.",
      d:" Only mobile applications.",
    correct: 'c'
  },
  {
    question: 'ECMAScript 6 introduced features such as:',
      a: "Looping structures and conditionals.",
      b: "Object-oriented programming concepts.",
      c:" Data encryption algorithms.",
      d: "Audio and video playback.",
    correct: 'b'
  },
  {
    question: 'JavaScript is often used on the:',
      a:" Front-end side of web development.",
      b:" Back-end side of web development.",
      c: "Both front-end and back-end sides of web development.",
      d: "Mobile app development side.",
    correct: 'c'
  },
 {
    question: 'JavaScript was initially named "LiveScript."',
    answer: 'True'
  },
  {
    question: 'JavaScript is primarily used for server-side development.',
    answer: 'False'
  },
  {
    question: 'ECMAScript 6 introduced significant improvements to JavaScript.',
    answer: 'True'
  },
  {
    question: 'JavaScript allows developers to manipulate the HTML Document Object Model.',
    answer: 'True'
  },
  {
    question: 'JavaScript is a low-level programming language.',
    answer: 'False'
  }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const c = document.getElementById('c');
const d = document.getElementById('d');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
deselectAnswer()
const currentQuizData = quizData[currentQuiz];
  if ('correct' in currentQuizData) {
    // Multiple-choice question
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

  } else {
    // True or false question
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = 'True';
    b_text.innerText = 'False';
    c_text.style.display = 'none';
    d_text.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';
  }
}

function deselectAnswer(){
answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      if ('correct' in quizData[currentQuiz]) {
        // Multiple-choice question
        answer = answerEl.id;
      } else {
        // True or false question
        answer = answerEl.id === 'a' ? 'True' : 'False';
      }
    }
  });
  return answer;
}

submitBtn.addEventListener('click', ()=>{
const answer = getSelected()
if(answer){
if ('correct' in quizData[currentQuiz]) {
      // Multiple-choice question
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
    } else {
      // True or false question
      if (answer === quizData[currentQuiz].answer) {
        score++;
      }
    }
    currentQuiz++;


 if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      let message;
      if (score >= 7 && score <= 9) {
        message = "Very Good!";
      } else if (score === 10) {
        message = "Perfect!";
      } else {
        message = "It's okay, you can try again.";
      }

      quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <p class="message">${message}</p>
        <div class="answerkey">
<ul >
Answers:
<li>1. text editor</li>
<li>2. code</li>
<li>3. productivity</li>
<li>4. development</li>
<li>5. HTTP</li>
<li>6. True</li>
<li>7. True</li>
<li>8. True</li>
<li>9. True</li>
<li>10. True</li>
</ul>
</div>
 <button onclick="location.reload()">Reload</button>
      `;
}
}
})