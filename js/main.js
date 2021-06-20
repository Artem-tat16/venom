const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-menu");
const menuCloseButtom = document.querySelector(".menu-close");

menuButton.addEventListener("click", ()=> {
  menu.classList.add("is-active");
  menuCloseButtom.classList.add("is-active");
});
menuCloseButtom.addEventListener("click", ()=> {
  menu.classList.remove("is-active");
  menuCloseButtom.classList.remove("is-active");

});
