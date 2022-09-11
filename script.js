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

// const accountid1 = {
//   email: "maligaurav947@gmail.com",
//   pass: "123",
//   Name: "Mali Gaurav",
// };
// const accountid2 = {};

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
const account = [accountid1, accoundid2, accoundid3];
