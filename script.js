const questions = [
{
question: "เมื่อได้โจทย์โต้วาที คุณจะ...",
answer1: "วางโครง argument",
answer1Total: 1,
answer2: "คิดวิธีพูดให้น่าสนใจ",
answer2Total: 2,
answer3: "หาช่องโหว่ฝ่ายตรงข้าม",
answer3Total: 3,
answer4: "เตรียมโต้กลับทันที",
answer4Total: 4
},

{
question: "เวลาฟังคู่แข่งพูด คุณจะ...",
answer1: "จดโน้ต",
answer1Total: 1,
answer2: "ฟังเพื่อเตรียมพูด",
answer2Total: 2,
answer3: "หาช่องโหว่",
answer3Total: 3,
answer4: "คิดโต้ทันที",
answer4Total: 4
},

{
question: "จุดแข็งของคุณคือ...",
answer1: "การวางโครง",
answer1Total: 1,
answer2: "การพูด",
answer2Total: 2,
answer3: "การวิเคราะห์",
answer3Total: 3,
answer4: "การโต้แย้ง",
answer4Total: 4
}
];

let currentQuestion = 0;
let score = [];
const totalQuestions = questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');

const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const result = document.querySelector('.result');

function generateQuestions(index){

const question = questions[index];

questionEl.innerHTML = `${index + 1}. ${question.question}`

option1.setAttribute('data-total', question.answer1Total);
option2.setAttribute('data-total', question.answer2Total);
option3.setAttribute('data-total', question.answer3Total);
option4.setAttribute('data-total', question.answer4Total);

option1.innerHTML = question.answer1;
option2.innerHTML = question.answer2;
option3.innerHTML = question.answer3;
option4.innerHTML = question.answer4;

}

function loadNextQuestion(){

const selectedOption = document.querySelector('input[type="radio"]:checked');

if(!selectedOption){
alert('กรุณาเลือกคำตอบ');
return;
}

const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

score.push(answerScore);

currentQuestion++;

selectedOption.checked = false;

if(currentQuestion == totalQuestions){

const totalScore = score.reduce((a,b)=>a+b,0);

container.style.display = 'none';

let resultText = "";

if(totalScore <= 4){
result.innerHTML = `
<h2>Strategist</h2>
<img src="Strategist.png" width="200">
<p>คุณเป็นนักวางแผน คิดเป็นระบบ และจัด argument ได้ดี</p>
`;
}

else if(totalScore <= 7){
result.innerHTML = `
<h2>Speaker</h2>
<img src="Speaker.png" width="200">
<p>คุณเป็นนักพูด ดึงดูดคนฟัง และมั่นใจ</p>
`;
}

else if(totalScore <= 10){
result.innerHTML = `
<h2>Analyst</h2>
<img src="Analyst.png" width="200">
<p>คุณเป็นนักวิเคราะห์ จับจุดคู่แข่งเก่ง</p>
`;
}

else{
result.innerHTML = `
<h2>Challenger</h2>
<img src="Challenger.png" width="200">
<p>คุณเป็นนักท้าทาย กล้าโต้และมั่นใจ</p>
`;
}

return;

}

generateQuestions(currentQuestion);

}

function loadPreviousQuestion(){

currentQuestion--;
score.pop();

generateQuestions(currentQuestion);

}

generateQuestions(currentQuestion);

nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click', loadPreviousQuestion);
