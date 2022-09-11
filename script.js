const cardSection = document.getElementById("cardSection");
const navLinks = document.getElementById("navLinks");
const closeBtn = document.getElementById("cross");
const openBTN = document.getElementById("menu");
const overlayCross = document.getElementById("overlayCross");
const overLay = document.getElementById("overLay");
const emaiId = document.getElementById("emailid");
const passId = document.getElementById("passid");
const loginBtn = document.getElementById("loginbtn");
const overlaymess = document.getElementById("overlaymess");
const overlaymesscross = document.getElementById("overlaymesscross");
const loginbtnli = document.getElementById("loginbtnli");
const overtext = document.getElementById("overtext");
const overback = document.getElementById("overback");
let n = 1;
const gabbar = "gabbar";
const pass = "123";

loginBtn.addEventListener("click", () => {
  overlaymess.style.display = "flex";
  if (emaiId.value === gabbar) {
    overtext.innerText = `Welcome ${emaiId.value} Have Nice Day`;
    if (passId.value === pass) {
    } else {
      overtext.innerText = `Incorret Password`;
    }
  } else if (emaiId.value === "") {
    overtext.innerText = "Please Enter Your Email Id & Pass";
  } else {
    overtext.innerText = "You don't Have Account";
  }
});

loginbtnli.addEventListener("click", () => {
  overback.style.display = "block";
  overLay.style.display = "block";
});
overlaymesscross.addEventListener("click", () => {
  overlaymess.style.display = "none";
});
overlayCross.addEventListener("click", () => {
  displayNone();
});

overback.addEventListener("click", () => {
  displayNone();
});
openBTN.addEventListener("click", () => {
  openBTN.style.display = "none";
  navLinks.style.display = "flex";
  closeBtn.style.display = "grid";
});
closeBtn.addEventListener("click", () => {
  openBTN.style.display = "grid";
  navLinks.style.display = "none";
  closeBtn.style.display = "none";
});
function addToCard() {
  if (emaiId.value === "") {
    overlaymess.style.display = "flex";
    overtext.innerText = "Please Create First Account";
  } else {
    cardSection.innerText = n++;
  }
}

function displayNone() {
  overLay.style.display = "none";
  overback.style.display = "none";
  overlaymess.style.display = "none";
}
