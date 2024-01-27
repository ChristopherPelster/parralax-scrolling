let menu = document.querySelector("#mobile-menu");
let menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

let background = document.getElementById("sea");
let fisch1 = document.getElementById("fisch1");
let textExample1 = document.getElementById("text-example1");
let exampleTab1 = document.getElementById("exampleTab1");
let scrollHightOld = 0;

/* Überwachung des Scrollens, damit der Parallax-Effekt ausgeführt werden kann */
window.addEventListener("scroll", () => {
/* Ermitteln aller entsprechenden Variablien */
  let scrollHight = window.scrollY;
  let windowWidth = window.innerWidth;
  let windowHight = window.innerHeight;
  let parallaxStay = scrollHight + "px";
  let parallaxMoveRight = (scrollHight / windowHight) * windowWidth + "px";
  let moveRight = (scrollHight / windowHight) * windowWidth;

  background.style.marginTop = parallaxStay;
  if (moveRight < windowWidth + 200) {
    example1(parallaxStay, parallaxMoveRight);
    displayNone(1);
  } else {
    displayNone(2);
    if (moveRight < windowWidth * 2 + 300) {
      moveRight -= 600;
      fisch1.style.marginLeft = moveRight - windowWidth - 100 + "px";
      fisch1.style.marginTop = parallaxStay;
    } else {
    }
  }
});

function openExampleTab(evt, exampleName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(exampleName).style.display = "block";
}

function example1(parallaxStay, parallaxMoveRight) {
  fisch1.style.marginLeft = parallaxMoveRight;
  fisch1.style.marginTop = parallaxStay;
  textExample1.style.marginLeft = parallaxMoveRight;
  textExample1.style.marginTop = parallaxStay;
  exampleTab1.style.marginTop = parallaxStay;
}

function example2() {
  let scrollHight = window.scrollY;
  let windowWidth = window.innerWidth;
  let windowHight = window.innerHeight;
  let parallaxStay = scrollHight + "px";
  let parallaxMoveRight = (scrollHight / windowHight) * windowWidth + "px";
  fisch1.style.marginLeft = parallaxMoveRight;
  fisch1.style.marginTop = parallaxStay;
  textExample1.style.marginLeft = parallaxMoveRight;
  textExample1.style.marginTop = parallaxStay;
  exampleTab1.style.marginTop = parallaxStay;
}

function displayNone(except) {
  if (except != 1){
    exampleTab1.style.display = "none";
  } else {
    exampleTab1.style.display = "block";
  }
  /*
  if (except != 2){
    exampleTab2.style.display = "none";
  } else {
    exampleTab2.style.display = "block";
  }
  if (except != 3){
    exampleTab3.style.display = "none";
  } else {
    exampleTab3.style.display = "block";
  }
  if (except != 4){
    exampleTab4.style.display = "none";
  } else {
    exampleTab4.style.display = "block";
  }
  if (except != 5){
    exampleTab5.style.display = "none";
  } else {
    exampleTab5.style.display = "block";
  }
  if (except != 6){
    exampleTab6.style.display = "none";
  } else {
    exampleTab6.style.display = "block";
  }
  if (except != 7){
    exampleTab7.style.display = "none";
  } else {
    exampleTab7.style.display = "block";
  }
  */
}