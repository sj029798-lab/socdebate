const questions = [

{
question: "ตอนขึ้นเวทีครั้งแรก คุณจะ...",
answer1: "เริ่มพูดด้วยความมั่นใจ",
type1: "Eros",

answer2: "สังเกตคู่แข่งก่อน",
type2: "Ludus",

answer3: "วางโครงก่อนพูด",
type3: "Storge"
},

{
question: "เมื่อมีเวลาเตรียมตัวน้อย คุณจะ...",
answer1: "พูดตาม instinct",
type1: "Eros",

answer2: "คิดพลิกเกม",
type2: "Ludus",

answer3: "วางโครงสั้นๆ",
type3: "Storge"
},

{
question: "เมื่อถึงตาคุณเริ่มพูด คุณจะ...",
answer1: "เปิดด้วยประโยคทรงพลัง",
type1: "Eros",

answer2: "เปิดด้วย twist",
type2: "Ludus",

answer3: "เปิดด้วยโครง argument",
type3: "Storge"
},

{
question: "เมื่อคู่แข่งค้านแรง คุณจะ...",
answer1: "โต้กลับทันที",
type1: "Eros",

answer2: "พลิกเกม",
type2: "Ludus",

answer3: "วิเคราะห์เหตุผล",
type3: "Storge"
},

{
question: "เมื่อเวทีเริ่มตึงเครียด คุณจะ...",
answer1: "เพิ่มพลัง",
type1: "Eros",

answer2: "สร้าง twist",
type2: "Ludus",

answer3: "พูดอย่างสงบ",
type3: "Storge"
},

{
question: "เวลาซ้อม คุณจะ...",
answer1: "ฝึกพูด",
type1: "Eros",

answer2: "ฝึกโต้",
type2: "Ludus",

answer3: "ฝึกโครง",
type3: "Storge"
},

{
question: "เมื่อได้โจทย์ใหม่ คุณจะ...",
answer1: "คิดวิธีพูด",
type1: "Eros",

answer2: "หามุมใหม่",
type2: "Ludus",

answer3: "วิเคราะห์",
type3: "Storge"
},

{
question: "เวลาทำงานทีม คุณจะ...",
answer1: "สร้างแรงบันดาลใจ",
type1: "Eros",

answer2: "เสนอไอเดีย",
type2: "Ludus",

answer3: "จัดระบบ",
type3: "Storge"
},

{
question: "เวลาทำ argument คุณจะ...",
answer1: "เน้น impact",
type1: "Eros",

answer2: "เน้น surprise",
type2: "Ludus",

answer3: "เน้น logic",
type3: "Storge"
},

{
question: "ก่อนแข่ง คุณจะ...",
answer1: "ซ้อมพูด",
type1: "Eros",

answer2: "ซ้อมโต้",
type2: "Ludus",

answer3: "ทบทวนโครง",
type3: "Storge"
},

{
question: "นักโต้วาทีที่ดีควร...",
answer1: "ดึงดูดคนฟัง",
type1: "Eros",

answer2: "พลิกเกม",
type2: "Ludus",

answer3: "มีเหตุผล",
type3: "Storge"
},

{
question: "เวลาพูด คุณจะ...",
answer1: "ใช้อารมณ์",
type1: "Eros",

answer2: "ใช้ไหวพริบ",
type2: "Ludus",

answer3: "ใช้เหตุผล",
type3: "Storge"
},

{
question: "จุดแข็งของคุณคือ...",
answer1: "การพูด",
type1: "Eros",

answer2: "การโต้",
type2: "Ludus",

answer3: "การวิเคราะห์",
type3: "Storge"
},

{
question: "เมื่อไม่เห็นด้วย คุณจะ...",
answer1: "โต้ทันที",
type1: "Eros",

answer2: "พลิก argument",
type2: "Ludus",

answer3: "อธิบายเหตุผล",
type3: "Storge"
},

{
question: "นักโต้วาทีในฝันคือ...",
answer1: "นักพูดทรงพลัง",
type1: "Eros",

answer2: "นักพลิกเกม",
type2: "Ludus",

answer3: "นักวิเคราะห์",
type3: "Storge"
}

];


let scores = {
Eros:0,
Ludus:0,
Storge:0
};

let currentQuestion = 0;

const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');

const progress = document.getElementById("current");

const nextButton = document.querySelector('.next');
const result = document.querySelector('.result');
const container = document.querySelector('.quiz-container');


function generateQuestions(index){
    progress.innerHTML = index + 1;

let question = questions[index];

questionEl.innerHTML = question.question;

option1.innerHTML = question.answer1;
option2.innerHTML = question.answer2;
option3.innerHTML = question.answer3;

option1.setAttribute("data-type",question.type1);
option2.setAttribute("data-type",question.type2);
option3.setAttribute("data-type",question.type3);

}


function loadNextQuestion(){

const selectedOption = document.querySelector('input[type="radio"]:checked');

if(!selectedOption){
alert("กรุณาเลือกคำตอบ");
return;
}

let selectedType = selectedOption.nextElementSibling.getAttribute("data-type");

scores[selectedType]++;

currentQuestion++;

selectedOption.checked = false;

if(currentQuestion == questions.length){

showResult();
return;

}

generateQuestions(currentQuestion);

}


function showResult(){

container.style.display = "none";

let sorted = Object.entries(scores).sort((a,b)=>b[1]-a[1]);

let first = sorted[0][0];
let second = sorted[1][0];

let diff = sorted[0][1]-sorted[1][1];

let finalResult;

if(diff<=1){

if((first=="Eros" && second=="Ludus") || (first=="Ludus" && second=="Eros")){
finalResult="Mania";
}

else if((first=="Ludus" && second=="Storge") || (first=="Storge" && second=="Ludus")){
finalResult="Pragma";
}

else{
finalResult="Agape";
}

}
else{

finalResult=first;

}

displayResult(finalResult);

}



function displayResult(type){

const results = {

Eros:`
<div class="result-card eros">
<img src="logo.png" class="logo">
<img src="Eros.png" class="result-img">
<h2>Eros - นักพูดสายเสน่ห์</h2>
<div class="traits">
<span>คาริสมาแรง</span>
<span>ดึงดูดคนฟัง</span>
<span>พูดลื่น</span>
</div>
<div class="result-box">
Eros คือเสียงที่ทำให้คนฟัง "รู้สึก" ก่อนเชื่อเหตุผล
</div>
</div>
`,

Ludus:`
<div class="result-card ludus">
<img src="logo.png" class="logo">
<img src="Ludus.png" class="result-img">
<h2>Ludus - นักพูดสายเจ้าเล่ห์</h2>
<div class="traits">
<span>พลิกเกม</span>
<span>ไหวพริบ</span>
<span>ฉลาด</span>
</div>
<div class="result-box">
Ludus คือผู้พลิกเกมบนเวทีโต้วาที
</div>
</div>
`,

Storge:`
<div class="result-card storge">
<img src="logo.png" class="logo">
<img src="Storage.png" class="result-img">
<h2>Storge - นักพูดสายอบอุ่น</h2>
<div class="traits">
<span>สุภาพ</span>
<span>มั่นคง</span>
<span>เหตุผล</span>
</div>
<div class="result-box">
Storge พูดเพื่อให้ทุกคนเข้าใจ
</div>
</div>
`,

Mania:`
<div class="result-card mania">
<img src="logo.png" class="logo">
<img src="Mania.png" class="result-img">
<h2>Mania - นักพูดสายไฟแรง</h2>
<div class="traits">
<span>พลังสูง</span>
<span>อารมณ์</span>
<span>เข้มข้น</span>
</div>
<div class="result-box">
Mania คือพลังของเวที
</div>
</div>
`,

Pragma:`
<div class="result-card pragma">
<img src="logo.png" class="logo">
<img src="Pragma.png" class="result-img">
<h2>Pragma - นักพูดสายเหตุผล</h2>
<div class="traits">
<span>วิเคราะห์</span>
<span>ระบบ</span>
<span>แม่นยำ</span>
</div>
<div class="result-box">
Pragma คือสมองของทีม
</div>
</div>
`,

Agape:`
<div class="result-card agape">
<img src="logo.png" class="logo">
<img src="Agape.png" class="result-img">
<h2>Agape - นักพูดสายอุดมการณ์</h2>
<div class="traits">
<span>แรงบันดาลใจ</span>
<span>มองภาพใหญ่</span>
<span>พลังบวก</span>
</div>
<div class="result-box">
Agape คือเสียงสุดท้ายของเวที
</div>
</div>
`

}

result.innerHTML = results[type];

}


generateQuestions(currentQuestion);
nextButton.addEventListener("click",loadNextQuestion);

