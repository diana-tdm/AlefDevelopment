function trackScroll() {
  let scrolled = window.pageYOffset;
  let coords = document.documentElement.clientHeight / 2;

  if (scrolled > coords) {
    goTopBtn.classList.remove("button-up--hide");
  }
  if (scrolled < coords) {
    goTopBtn.classList.add("button-up--hide");
  }
}

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 0);
  }
}

let goTopBtn = document.querySelector(".button-up");

window.addEventListener("scroll", trackScroll);
goTopBtn.addEventListener("click", backToTop);

let input = document.querySelector(".footer__input");
let error = document.querySelector(".footer__error");

input.addEventListener("input", () => {
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(input.value) == false) {
    input.classList.add("footer__input--error");
    error.classList.remove("footer__error--hide");
  } else {
    input.classList.remove("footer__input--error");
    error.classList.add("footer__error--hide");
  }
});

let favs = document.querySelectorAll(".card__fav");
let modal = document.querySelector(".modal");
favs.forEach((fav) => {
  fav.addEventListener("click", () => {
    if (fav.classList.contains("card__fav--active")) {
      fav.classList.remove("card__fav--active");
    } else {
      fav.classList.add("card__fav--active");
      modal.classList.remove("modal--hide");
      setTimeout(() => {
        modal.classList.add("modal--hide");
      }, 3000);
    }
  });
});

let menuBtn = document.querySelector(".menu__btn");
let menu = document.querySelector(".header__menu");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("header__menu--show");
});
