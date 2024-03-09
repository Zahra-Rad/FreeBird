let openMenuButton = document.querySelector("#sm-menu");
console.log(menu);
let lgButton = document.querySelector("#lg-button");

openMenuButton.addEventListener("click", openMenu);
lgButton.addEventListener("click", openMenu);

function openMenu() {
  let menu = document.querySelector("#menu");
  menu.classList.toggle("active");
}
