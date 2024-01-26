let menu = document.querySelector("#mobile-menu");
let menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

let background = document.getElementById("sea");
let fisch1 = document.getElementById("fisch1");
let textExample1 = document.getElementById("text-example1");
let scrollHightOld = 0;

window.addEventListener("scroll", () => {
  let scrollHight = window.scrollY;
  let windowWidth = window.innerWidth;
  let windowHight = window.innerHeight;

  let parallaxStay = scrollHight + "px";
  let parallaxMoveRight = (scrollHight / windowHight) * windowWidth;

  background.style.marginTop = parallaxStay;
  if (parallaxMoveRight < windowWidth + 200) {
    fisch1.style.marginLeft = parallaxMoveRight + "px";
    fisch1.style.marginTop = parallaxStay;
    textExample1.style.marginLeft = parallaxMoveRight + "px";
    textExample1.style.marginTop = parallaxStay;
  } else if (parallaxMoveRight < windowWidth * 2 + 300) {
    parallaxMoveRight -= 600
    fisch1.style.marginLeft = parallaxMoveRight - windowWidth -100 + "px";
    fisch1.style.marginTop = parallaxStay;
  } else {
    
  }
});
