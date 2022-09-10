const navLinks = document.getElementById("navLinks");
const closeBtn = document.getElementById("cross");
const menu = document.getElementById("menu");
menu.addEventListener("click", () => {
  menu.style.display = "none";
  navLinks.style.display = "flex";
  closeBtn.style.display = "grid";
});
closeBtn.addEventListener("click", () => {
  menu.style.display = "grid";
  navLinks.style.display = "none";
  closeBtn.style.display = "none";
});
