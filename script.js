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
const itemQ1 = document.getElementById("itemQ1");
const itemQ2 = document.getElementById("itemQ2");
const itemQ3 = document.getElementById("itemQ3");
const itemQ4 = document.getElementById("itemQ4");
const itemQ5 = document.getElementById("itemQ5");
const itemQ6 = document.getElementById("itemQ6");
const itembtnplusQ1 = document.getElementById("itembtnplusQ1");
const itembtnplusQ2 = document.getElementById("itembtnplusQ2");
const itembtnplusQ3 = document.getElementById("itembtnplusQ3");
const itembtnplusQ4 = document.getElementById("itembtnplusQ4");
const itembtnplusQ5 = document.getElementById("itembtnplusQ5");
const itembtnplusQ6 = document.getElementById("itembtnplusQ6");
const itembtnminusQ1 = document.getElementById("itembtnminusQ1");
const itembtnminusQ2 = document.getElementById("itembtnminusQ2");
const itembtnminusQ3 = document.getElementById("itembtnminusQ3");
const itembtnminusQ4 = document.getElementById("itembtnminusQ4");
const itembtnminusQ5 = document.getElementById("itembtnminusQ5");
const itembtnminusQ6 = document.getElementById("itembtnminusQ6");

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

let itemQ1text = 1;
let itemQ2text = 1;
let itemQ3text = 1;
let itemQ4text = 1;
let itemQ5text = 1;
let itemQ6text = 1;
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

itembtnplusQ1.addEventListener("click", () => {
  itemQ1.innerText = itemQ1text++;
});
itembtnplusQ2.addEventListener("click", () => {
  itemQ2.innerText = itemQ2text++;
});

itembtnplusQ3.addEventListener("click", () => {
  itemQ3.innerText = itemQ3text++;
});

itembtnplusQ4.addEventListener("click", () => {
  itemQ4.innerText = itemQ4text++;
});

itembtnplusQ5.addEventListener("click", () => {
  itemQ5.innerText = itemQ5text++;
});

itembtnplusQ6.addEventListener("click", () => {
  itemQ6.innerText = itemQ6text++;
});

itembtnminusQ1.addEventListener("click", () => {
  itemQ1.innerText = itemQ1text--;
});
itembtnminusQ2.addEventListener("click", () => {
  itemQ2.innerText = itemQ2text--;
});
itembtnminusQ3.addEventListener("click", () => {
  itemQ3.innerText = itemQ3text--;
});
itembtnminusQ4.addEventListener("click", () => {
  itemQ4.innerText = itemQ4text--;
});
itembtnminusQ5.addEventListener("click", () => {
  itemQ5.innerText = itemQ5text--;
});
itembtnminusQ6.addEventListener("click", () => {
  itemQ6.innerText = itemQ6text--;
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
