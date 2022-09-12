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
const sidecard = document.getElementById("sidecard");
const sidecardcross = document.getElementById("sidecardcross");
const iconbtn = document.getElementById("iconbtn");
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");
const item6 = document.getElementById("item6");
const proitem1 = document.getElementById("proitem1");
const proitem2 = document.getElementById("proitem2");
const proitem3 = document.getElementById("proitem3");
const proitem4 = document.getElementById("proitem4");
const proitem5 = document.getElementById("proitem5");
const proitem6 = document.getElementById("proitem6");
const accountid1 = {
  email: "maligaurav947@gmail.com",
  pass: "123",
  Name: "Mali Gaurav",
};
const accountid2 = {
  email: "mahajanjaydeep1@gmail.com",
  pass: "1",
  Name: "Mahajan Jaydeep",
};
const accountid3 = {
  email: "nikhiljoshi23@gmail.com",
  pass: "23",
  Name: "Nikhil Joshi",
};
let n = 1;
function addToCard() {
  if (emaiId.value === "") {
    overlaymess.style.display = "flex";
    overtext.innerText = "To Access The Card Login First";
  } else {
    cardSection.innerText = n++;
  }
}

function displayNone() {
  overLay.style.display = "none";
  overback.style.display = "none";
  overlaymess.style.display = "none";
}
loginBtn.addEventListener("click", () => {
  overlaymess.style.display = "flex";
  if (emaiId.value === accountid1.email) {
    overtext.innerText = `Welcome ${accountid1.Name} Have Nice Day`;
    loginbtnli.innerText = "Sign Out";
    if (passId.value === accountid1.pass) {
    } else {
      overtext.innerText = `Incorret Password`;
    }
  } else if (emaiId.value === accountid2.email) {
    overtext.innerText = `Welcome ${accountid2.Name} Have Nice Day`;
    loginbtnli.innerText = "Sign Out";
    if (passId.value === accountid2.pass) {
    } else {
      overtext.innerText = `Incorret Password`;
    }
  } else if (emaiId.value === accountid3.email) {
    overtext.innerText = `Welcome ${accountid3.Name} Have Nice Day`;
    loginbtnli.innerText = "Sign Out";
    if (passId.value === accountid3.pass) {
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
  if (loginbtnli.innerHTML === `Sign Out`) {
    overLay.style.display = "none";
    overback.style.display = "none";
    overlaymess.style.display = "none";
    loginbtnli.innerText = "Login";
  } else {
    overback.style.display = "block";
    overLay.style.display = "block";
  }
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
iconbtn.addEventListener("click", () => {
  sidecard.style.display = "grid";
});
sidecardcross.addEventListener("click", () => {
  sidecard.style.display = "none";
});
proitem1.addEventListener("click", () => {
  addToCard();
  item1.style.display = "flex";
});
proitem2.addEventListener("click", () => {
  addToCard();
  item2.style.display = "flex";
});
proitem3.addEventListener("click", () => {
  addToCard();
  item3.style.display = "flex";
});
proitem4.addEventListener("click", () => {
  addToCard();
  item4.style.display = "flex";
});
proitem5.addEventListener("click", () => {
  addToCard();
  item5.style.display = "flex";
});
proitem6.addEventListener("click", () => {
  addToCard();
  item6.style.display = "flex";
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
