// const evalBtnsEl = [
//   document.querySelector("#btn1"),
//   document.querySelector("#btn2"),
//   document.querySelector("#btn3"),
//   document.querySelector("#btn4"),
//   document.querySelector("#btn5"),
// ];

// for (let i = 0; i < evalBtnsEl.length; i++) {

// }

const evalBtn1El = document.querySelector("#btn1");
const evalBtn2El = document.querySelector("#btn2");
const evalBtn3El = document.querySelector("#btn3");
const evalBtn4El = document.querySelector("#btn4");
const evalBtn5El = document.querySelector("#btn5");

let evaluationSelected = 0;

evalBtn1El.addEventListener("click", () => {
  evalBtn1El.classList.add("selected");
  evalBtn2El.classList.remove("selected");
  evalBtn3El.classList.remove("selected");
  evalBtn4El.classList.remove("selected");
  evalBtn5El.classList.remove("selected");

  evaluationSelected = evalBtn1El.innerText;
  //   console.log(evaluationSelected);
});

evalBtn2El.addEventListener("click", () => {
  evalBtn2El.classList.add("selected");
  evalBtn1El.classList.remove("selected");
  evalBtn3El.classList.remove("selected");
  evalBtn4El.classList.remove("selected");
  evalBtn5El.classList.remove("selected");

  evaluationSelected = evalBtn2El.innerText;
});

evalBtn3El.addEventListener("click", () => {
  evalBtn3El.classList.add("selected");
  evalBtn1El.classList.remove("selected");
  evalBtn2El.classList.remove("selected");
  evalBtn4El.classList.remove("selected");
  evalBtn5El.classList.remove("selected");

  evaluationSelected = evalBtn3El.innerText;
});

evalBtn4El.addEventListener("click", () => {
  evalBtn4El.classList.add("selected");
  evalBtn1El.classList.remove("selected");
  evalBtn2El.classList.remove("selected");
  evalBtn3El.classList.remove("selected");
  evalBtn5El.classList.remove("selected");

  evaluationSelected = evalBtn4El.innerText;
});

evalBtn5El.addEventListener("click", () => {
  evalBtn5El.classList.add("selected");
  evalBtn1El.classList.remove("selected");
  evalBtn2El.classList.remove("selected");
  evalBtn3El.classList.remove("selected");
  evalBtn4El.classList.remove("selected");

  evaluationSelected = evalBtn5El.innerText;
});

const submitEl = document.querySelector("#submitBtn");

submitEl.addEventListener("click", () => {
  if (evaluationSelected) {
    document.querySelector("#ratingBox").style.display = "none";
    document.querySelector("#thanksBox").style.display = "revert";
  }
});
