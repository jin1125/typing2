const p = document.getElementById("text");
const textList = [
  "Hello world",
  "This is my App",
  "How are you?",
  "Hello Hello",
];

let checkText = [];
let num = 0;

const createText = () => {
  num++;

  if(num>4){
    p.textContent = "FINISH!!";
    return; 
  }

  let rnd = Math.floor(Math.random() * textList.length);
  p.textContent = "";
  checkText = textList[rnd].split("").map((value) => {
    const span = document.createElement("span");
    span.textContent = value;
    p.appendChild(span);

    return span;
  });
};

createText();

const keyDown = (e) => {
  if (e.key === checkText[0].textContent) {
    checkText[0].className = "add-blue";
    checkText.shift();

    if (!checkText.length) {
      createText();
    }
  }
};

document.addEventListener("keydown", keyDown);
