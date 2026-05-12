// ================= QUESTIONS =================
const questions = [
{
question: "1) เมื่อต้องไปพูดหรือนำเสนองานในหัวข้อที่คุณไม่ถนัดเลย คุณจะรับมืออย่างไร?",
answer1: "เน้นสร้างบรรยากาศให้เป็นกันเอง ใช้บุคลิกและความมั่นใจช่วยดึงดูดความสนใจ",
type1: "Eros",
answer2: "หาประเด็นที่น่าสงสัยหรือคำถามชวนคิดมาโยนให้ผู้ฟัง มีการโต้ตอบกัน",
type2: "Ludus",
answer3: "ทำการบ้านอย่างหนัก อ่านเนื้อหาจนเข้าใจ ฝึกพูดจนคล่องก่อนก้าวขาขึ้นเวที",
type3: "Storge"
},
{
question: "2) อะไรคือสิ่งที่จะทำให้คุณรู้สึกว่าการพูดหรือการนำเสนอประสบความสำเร็จ?",
answer1: "คนฟังเดินเข้ามาชมว่า \"คุณดูดีและมีพลังมาก\" หลังจากพูดจบ",
type1: "Eros",
answer2: "เราสามารถคุมจังหวะและรับมือกับคำถามยากๆ ได้อย่างเหนือชั้น",
type2: "Ludus",
answer3: "เนื้อหาที่เราเตรียมมาสามารถเปลี่ยนความเข้าใจผิดของคนให้ถูกต้องได้",
type3: "Storge"
},
{
question: "3) ถ้าต้องพรีเซนต์งานหน้าห้องหรือในที่ประชุม สิ่งที่คุณกังวลที่สุดคือ?",
answer1: "กลัวพูดแล้วดูไม่น่าเชื่อถือ หรือบุคลิกภาพดูไม่เป็นมืออาชีพ",
type1: "Eros",
answer2: "กลัวโดนถามคำถามกวนๆ แล้วเรานึกมุกสวนกลับไม่ทัน",
type2: "Ludus",
answer3: "กลัวข้อมูลที่เตรียมมาไม่พอ หรือพูดผิดหลักการ",
type3: "Storge"
},
{
question: "4) ถ้าต้องเลือก \"อุปกรณ์เสริม\" ที่ช่วยให้การสื่อสารดีขึ้น คุณจะเลือกอะไร?",
answer1: "เสื้อผ้าที่เสริมบุคลิกภาพที่ทำให้เราดูภูมิฐานและโดดเด่น",
type1: "Eros",
answer2: "สไลด์นำเสนอที่มีลูกเล่นหรือมุกตลกที่สอดแทรกไว้",
type2: "Ludus",
answer3: "เอกสารประกอบที่สรุปข้อมูลและตัวเลขไว้อย่างครบถ้วน",
type3: "Storge"
},
{
question: "5) อะไรคือสิ่งที่กระตุ้นให้คุณอยากแชร์ความคิดเห็นในวงสนทนา?",
answer1: "ความต้องการแสดงจุดยืนและความเป็นตัวของตัวเอง",
type1: "Eros",
answer2: "การได้ลองท้าทายความคิดเห็นของคนอื่นดูว่าจะโต้ตอบกลับมายังไง",
type2: "Ludus",
answer3: "การเห็นคนในวงเข้าใจข้อมูลผิดๆ และอยากแก้ไขให้ถูกต้อง",
type3: "Storge"
},
{
question: "6) เวลาที่คุณเล่าเรื่องราวสักเรื่อง แล้วคนเริ่มเสียสมาธิ คุณมักจะ?",
answer1: "ปรับระดับเสียงและจังหวะการพูดให้ตื่นเต้นขึ้น เพื่อดึงดูดสายตาคนกลับมา",
type1: "Eros",
answer2: "แกล้งถามคำถามกวนๆ หรือโยนความเห็นแย้งเพื่อให้เกิดการถกเถียง",
type2: "Ludus",
answer3: "ยกตัวอย่างเรื่องเล่าที่ใกล้ตัวและเข้าใจง่ายขึ้นเพื่อให้เห็นภาพชัดเจน",
type3: "Storge"
},
{
question: "7) สไตล์การใช้ภาษาคำพูดของคุณเป็นแบบไหน?",
answer1: "ภาษาสวยงาม มีจังหวะจะโคน และเน้นการโน้มน้าวอารมณ์",
type1: "Eros",
answer2: "ภาษาที่กระชับ ทันสมัยเอาใจวัยรุ่น และชอบใช้คำที่ชวนให้คนคิดตาม",
type2: "Ludus",
answer3: "ภาษาที่เรียบง่าย ชัดเจน และตรงไปตรงมาตามหลักการ",
type3: "Storge"
},
{
question: "8) ในห้องเรียน คุณมักจะมีบุคลิกแบบไหน?",
answer1: "นั่งหน้าสุด มีความมั่นใจ และมักจะได้รับความสนใจจากคนรอบข้างเสมอ",
type1: "Eros",
answer2: "สายซุ่ม ชอบสังเกตการณ์ และคอยโยนมุกหรือประเด็นที่เพื่อนคาดไม่ถึง",
type2: "Ludus",
answer3: "นั่งจดรายละเอียด และให้ความสำคัญกับการทำความเข้าใจเนื้อหา",
type3: "Storge"
},
{
question: "9) ถ้าต้องแก้ตัวในเรื่องที่คุณทำผิด คุณจะใช้วิธีไหน?",
answer1: "แสดงความเสียใจอย่างสุดซึ้งและใช้วาทศิลป์ให้คนฟังเห็นใจเรา",
type1: "Eros",
answer2: "พยายามเบี่ยงเบนประเด็นหรือหาข้ออ้างที่เป็นตรรกะความคิดที่คนเถียงยาก",
type2: "Ludus",
answer3: "อธิบายที่มาที่ไปตามความจริง และยอมรับผิดอย่างสุภาพ",
type3: "Storge"
},
{
question: "10) คุณอยากให้คนจดจำ \"การสื่อสาร\" ของคุณในลักษณะไหน?",
answer1: "\"ตราตรึงใจ\" พูดแล้วคนประทับใจในตัวตนและเสน่ห์",
type1: "Eros",
answer2: "\"เฉียบแหลม\" พูดแล้วคนทึ่งในไหวพริบและการแก้เกม",
type2: "Ludus",
answer3: "\"มั่นคง\" พูดแล้วคนรู้สึกเชื่อถือและไว้วางใจในข้อมูล",
type3: "Storge"
},
{
question: "11) เมื่อมีคนแย้งความเห็นของคุณกลางที่สาธารณะ คุณรู้สึกอย่างไร?",
answer1: "รู้สึกโดนท้าทาย และอยากจะตอบกลับไปให้ดูเท่และชนะใจ",
type1: "Eros",
answer2: "รู้สึกสนุกและอยากจะใช้คำถามย้อนกลับไปเพื่อให้เขาตกใจรับมือไม่ถูก",
type2: "Ludus",
answer3: "ไม่รู้สึกอะไร แต่จะตั้งใจฟังเพื่อดูว่าเหตุผลที่เขาแย้งมานั้นมีน้ำหนักแค่ไหน",
type3: "Storge"
},
{
question: "12) ถ้าคนอื่นใช้อารมณ์ใส่คุณ คุณจะรับมือยังไง?",
answer1: "ใช้ความสงบนิ่งสยบอารมณ์เขา เพื่อให้เขารู้สึกว่าไม่ควรใช้อารมณ์ต่อ",
type1: "Eros",
answer2: "ยิ้มสู้แล้วใช้คำพูดจิกกัดหรือประชดเล็กน้อยเพื่อให้บรรยากาศดูเบาลง",
type2: "Ludus",
answer3: "ใจเย็นและพยายามดึงบทสนทนากลับเข้าสู่ประเด็นที่เป็นเหตุเป็นผล",
type3: "Storge"
},
{
question: "13) เทคนิคที่คุณมักจะใช้เพื่อชนะในการถกเถียงคืออะไร?",
answer1: "การใช้อารมณ์ร่วมและความรู้สึกที่จริงใจจนคนฟังต้องคล้อยตาม",
type1: "Eros",
answer2: "การจับผิดคำพูดของอีกฝ่าย แล้วย้อนกลับไปมัดตัวเขาเอง",
type2: "Ludus",
answer3: "การกางสถิติ ข้อมูล หรือความถูกต้องที่ใครก็เถียงไม่ได้",
type3: "Storge"
},
{
question: "14) หลังจากการถกเถียงจบลง คุณมักจะจบด้วยท่าทีแบบไหน?",
answer1: "จบด้วยความประทับใจ และรักษาสัมพันธ์ที่ดีไว้เสมอ",
type1: "Eros",
answer2: "จบด้วยการทำให้เขารู้สึกว่าเขาแพ้ทางคุณ",
type2: "Ludus",
answer3: "จบด้วยการสรุปสิ่งที่ได้เรียนรู้และทำความเข้าใจตรงกัน",
type3: "Storge"
},
{
question: "15) คุณอยากให้คนรอบข้างพูดถึงการสื่อสารของคุณว่าอย่างไร?",
answer1: "เป็นคนมีเสน่ห์ พูดจาน่าฟัง และดึงดูดใจ",
type1: "Eros",
answer2: "เป็นคนฉลาด มีไหวพริบ และคุยด้วยแล้วสนุก",
type2: "Ludus",
answer3: "เป็นคนน่าเชื่อถือ จริงใจ และคุยด้วยแล้วสบายใจ",
type3: "Storge"
}
];

// ================= LOGIC =================
let scores = {Eros:0, Ludus:0, Storge:0};
let currentQuestion = 0;

const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const nextButton = document.querySelector('.next');
const result = document.querySelector('.result');
const container = document.querySelector('.quiz-container');
const progress = document.getElementById("current");

// ================= START QUIZ =================
function startQuiz() {
  const introContainer = document.querySelector('.intro-container');
  introContainer.style.display = 'none';
  container.classList.add('active');
  generateQuestions(currentQuestion);
}

function generateQuestions(index){
progress.innerHTML = index+1;

let q = questions[index];

questionEl.innerHTML = q.question;
option1.innerHTML = q.answer1;
option2.innerHTML = q.answer2;
option3.innerHTML = q.answer3;

option1.setAttribute("data-type",q.type1);
option2.setAttribute("data-type",q.type2);
option3.setAttribute("data-type",q.type3);
}

function loadNextQuestion(){
const selected = document.querySelector('input[type="radio"]:checked');

if(!selected){ alert("กรุณาเลือกคำตอบ"); return;}

let type = selected.nextElementSibling.getAttribute("data-type");
scores[type]++;

currentQuestion++;
selected.checked = false;

if(currentQuestion >= questions.length){
showResult();
return;
}

generateQuestions(currentQuestion);
}

// ================= RESULT =================
function showResult(){

container.style.display="none";

let sorted = Object.entries(scores).sort((a,b)=>b[1]-a[1]);
let first = sorted[0][0];
let second = sorted[1][0];
let diff = sorted[0][1]-sorted[1][1];

let final;

if(diff<=1){
if((first=="Eros" && second=="Ludus")||(first=="Ludus"&&second=="Eros")) final="mania";
else if((first=="Ludus"&&second=="Storge")||(first=="Storge"&&second=="Ludus")) final="pragma";
else final="agape";
}else{
final = first.toLowerCase();
}

displayResult(final);
}

function displayResult(type){

const results = {
eros:{class:"eros",color:"#e53935",mainColor:"#ff4d4d",title:"EROS",tagline:"The Charismatic Debater",img:"แดง.png",
personality:"คุณคือ \"หนูนักพูดสายเสน่ห์\"",
personalityDesc:"ไม่ใช่แค่การพูด แต่คือการโชว์! คุณคือนิยามของความมั่นใจที่มาพร้อมออร่าดึงดูดสายตา ทุกถ้อยคำมีจริตและพลังที่ทำให้คนฟังเคลิ้มตามได้ไม่ยาก เหมือนนั่งดูโชว์ระดับตำนานที่พลาดไม่ได้แม้แต่วินาทีเดียว",
strengths:[{icon:"👤",title:"ตัวแม่",desc:"โดดเด่นและน่าสังเกตการณ์"},{icon:"💭",title:"มั่นใจ",desc:"ยืดหยุ่นและปรับตัวได้ดี"},{icon:"💓",title:"สะกดสายตา",desc:"ทำให้คนรู้สึกดีและไว้ใจ"}]},

ludus:{class:"ludus",color:"#3949ab",mainColor:"#3b82f6",title:"LUDUS",tagline:"The Strategic Player",img:"น้ำเงิน.png",
personality:"คุณคือ \"หนูนักพูดสายกลยุทธ์\"",
personalityDesc:"เกมนี้ใครคุม? คุณคือนักวางกลยุทธ์ที่มีไหวพริบแพรวพราว ยิงคำถามทีเดียวมีหนาว! คุณรู้จังหวะรุก-รับ และเปลี่ยนเรื่องเครียดให้กลายเป็นเรื่องสนุกได้อย่างน่าเหลือเชื่อ",
strengths:[{icon:"🧠",title:"แพรวพราว",desc:"ปัญญาอ่อนแหลม"},{icon:"⚡",title:"ไหวพริบดี",desc:"คิดแกว่งเร็ว"},{icon:"🎮",title:"มีชั้นเชิง",desc:"เล่นเกมได้ดี"}]},

storge:{class:"storge",color:"#ffcc00",mainColor:"#ffcc00",title:"STORGE",tagline:"The Reliable Narrator",img:"เหลือง.png",
personality:"คุณคือ \"หนูนักพูดสายเม้ามอย\"",
personalityDesc:"ผู้ฟังสบายใจทุกครั้งที่ได้ฟัง เพราะคุณเน้นการสื่อสารที่เป็นกันเองและอบอุ่นเหมือนคนในครอบครัว แต่แฝงไปด้วยความจริงใจที่ทำให้คนไว้วางใจได้ทันที ไม่เน้นการปะทะด้วยอารมณ์แต่เน้นการสร้างความเข้าใจ",
strengths:[{icon:"📚",title:"จริงใจ",desc:"ความรู้ลึกซึ้ง"},{icon:"✓",title:"เป็นกันเอง",desc:"ถูกต้องเที่ยงแท้"},{icon:"🛡️",title:"ไว้ใจได้",desc:"มั่นคง น่าเชื่อถือ"}]},

mania:{class:"mania",color:"#8e24aa",mainColor:"#a855f7",title:"MANIA",tagline:"The Passionate Powerhouse",img:"ม่วง.png",
personality:"คุณคือ \"หนูนักพูดสายปลุกใจ\"",
personalityDesc:"การพูดที่ไม่ใส่อารมณ์ ก็เหมือนแกงที่ไม่ใส่พริก! คุณคือตัวจี๊ดที่พร้อมจะใส่จิตวิญญาณเพื่อกระตุ้นความรู้สึกคนฟังให้ลุกเป็นไฟ พร้อมสร้างประเด็นที่คนต้องเอาไปพูดต่อจนขึ้นเทรนด์",
strengths:[{icon:"🔥",title:"สร้างกระแส",desc:"พลังเต็มท่า"},{icon:"❤️",title:"ปลุกอารมณ์",desc:"หลงใหลจริงใจ"},{icon:"⚔️",title:"เป็นไวรัล",desc:"ไม่ยอมแพ้"}]},

pragma:{class:"pragma",color:"#43a047",mainColor:"#22c55e",title:"PRAGMA",tagline:"The Rational Architect",img:"เขียว.png",
personality:"คุณคือ \"หนูนักพูดสายเหตุผล\"",
personalityDesc:"ทุกคำพูดมีที่มา ทุกเนื้อหาเป๊ะตามโครงสร้าง คุณคือสถาปนิกทางความคิดที่วางข้อมูลแบบเป็นขั้นเป็นตอน ไม่พูดลอยๆแต่จะทำให้คุณเห็นภาพรวมด้วยเหตุและผลที่เถียงไม่ออก ถ้าอยากได้เนื้อหาแน่นๆ ข้อมูลเน้นๆ ต้องยกให้คุณเลย",
strengths:[{icon:"⚖️",title:"ข้อมูลแน่น",desc:"ดุลยภาค และเป็นธรรม"},{icon:"🔍",title:"ตรรกะเป๊ะ",desc:"วิเคราะห์อย่างลึก"},{icon:"📊",title:"เน้นโครงสร้าง",desc:"ใช้เหตุผล"}]},

agape:{class:"agape",color:"#fb8c00",mainColor:"#fb923c",title:"AGAPE",tagline:"The Inspiring Idealist",img:"ส้ม.png",
personality:"คุณคือ \"หนูนักพูดสายสร้างแรงบันดาลใจ\"",
personalityDesc:"พูดเพื่อสร้าง ไม่ใช่เพื่อทำลาย คุณคือนักสร้างแรงบันดาลใจที่มาพร้อมพลังบวกมหาศาล เพื่อส่วนรวม ทุกคำพูดคือการให้ที่มุ่งหวังจะเปลี่ยนโลกให้ดีขึ้นและปลุกใจให้ทุกคนลุกขึ้นมาสู้",
strengths:[{icon:"🌟",title:"สร้างพลังบวก",desc:"แรงบันดาลใจอยู่เสมอ"},{icon:"🎯",title:"มีเป้าหมาย",desc:"มีเป้าหมายชัดเจน"},{icon:"🤝",title:"เพื่อส่วนรวม",desc:"รวมคนไว้ด้วยกัน"}]}
};

const r = results[type];

document.body.style.background = r.mainColor;

result.innerHTML = `
<div class="result-card ${r.class}">

<div class="result-banner">
<img src="${r.img}" class="character-result">
</div>

<div class="result-content">

<h1 class="result-title">${r.title}</h1>
<p class="result-subtitle">${r.tagline}</p>

<div class="result-section personality-section">
<div class="section-header">
<span class="icon-heart">❤️</span>
<h2>Personality</h2>
</div>
<h3>${r.personality}</h3>
<p>${r.personalityDesc}</p>
</div>

<div class="result-section strengths-section">
<div class="section-header">
<span class="icon-star">⭐</span>
<h2>Strengths</h2>
</div>
<div class="strengths-grid">
${r.strengths.map(s=>`
<div class="strength-item">
<div class="strength-icon">${s.icon}</div>
<p class="strength-title">${s.title}</p>
</div>`).join("")}
</div>
</div>

</div>

<div class="share-buttons-container">
  <button class="share-btn" onclick="captureAndShare()">บันทึก</button>
  <button class="share-friend-btn" onclick="shareToFriend()">แชร์ผลลัพธ์</button>
</div>

</div>
`;
}

// ================= START =================
nextButton.addEventListener("click",loadNextQuestion);

// ================= CAPTURE & SHARE =================
async function captureAndShare() {
  const resultCard = document.querySelector('.result-card');
  const btn = document.querySelector('.share-btn');

  try {
    btn.disabled = true;

    const canvas = await html2canvas(resultCard, {
      backgroundColor: '#ffffff',
      scale: 2,
      useCORS: true,
      logging: false
    });

    canvas.toBlob(async function(blob) {
      if (!blob) {
        throw new Error('Blob creation failed');
      }

      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      const filename = `debate-personality-${new Date().getTime()}.png`;
      const file = new File([blob], filename, { type: 'image/png' });

      if (isIOS && navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: 'Debate Personality Result',
            text: 'บันทึกภาพผลลัพธ์จากแบบทดสอบ'
          });
        } catch (shareError) {
          console.warn('Share API failed, falling back to open image:', shareError);
          const url = URL.createObjectURL(blob);
          window.open(url, '_blank');
          alert('กดค้างที่ภาพ แล้วเลือก "บันทึกภาพ" เพื่อเก็บลงแกลเลอรี่');
          URL.revokeObjectURL(url);
        }
      } else if (isIOS) {
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
        alert('กดค้างที่ภาพ แล้วเลือก "บันทึกภาพ" เพื่อเก็บลงแกลเลอรี่');
        URL.revokeObjectURL(url);
      } else {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }

      btn.disabled = false;
    }, 'image/png');
  } catch (error) {
    console.error('Error capturing image:', error);
    alert('ขออภัย เกิดข้อผิดพลาดในการบันทึกรูป');
    btn.disabled = false;
  }
}

// ================= SHARE TO FRIEND =================
function shareToFriend() {
  window.open('https://www.instagram.com/soc.debate.ku/', '_blank');
}