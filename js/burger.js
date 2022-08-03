const headerBurgerBtn = document.querySelector(".header__burger");
const headerNav = document.querySelector(".nav");
headerBurgerBtn.addEventListener("click", () => {
  if (!headerNav.classList.contains("activenav")) {
    headerNav.classList.add("activenav");
  }
});

const headerNavCLose = document.querySelector(".nav__close");
headerNavCLose.addEventListener("click", () => {
  if (headerNav.classList.contains("activenav")) {
    headerNav.classList.remove("activenav");
  }
});
