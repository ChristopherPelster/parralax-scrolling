/*******************************************************************************
 *  Code für die Navigationsbar
 *******************************************************************************/
let menu = document.querySelector("#mobile-menu");
let menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

/*******************************************************************************
 *  Code für den Parallax-Effekt
 *******************************************************************************/

/*******************************************************************************
 *  Initialisieren der Variablen für den Parallax-Effekt
 *******************************************************************************/
let background = document.getElementById("sea");
let fisch1 = document.getElementById("fisch1");
let fisch2 = document.getElementById("fisch2");
let textExample1 = document.getElementById("text-example1");
let textExample2 = document.getElementById("text-example2");
let textExample3 = document.getElementById("text-example3");
let textExample4 = document.getElementById("text-example4");
let textExample5 = document.getElementById("text-example5");
let textExample6 = document.getElementById("text-example6");
let exampleTab1 = document.getElementById("exampleTab1");
let exampleTab2 = document.getElementById("exampleTab2");
let exampleTab3 = document.getElementById("exampleTab3");
let exampleTab4 = document.getElementById("exampleTab4");
let exampleTab5 = document.getElementById("exampleTab5");
let exampleTab6 = document.getElementById("exampleTab6");
let scrollHeightOld = 0;

/*******************************************************************************
 * Überwachung des Scrollens, damit der Parallax-Effekt ausgeführt werden kann
 *******************************************************************************/
window.addEventListener("scroll", () => {
  /*****************************************************************************
   * Ermitteln aller dafür benötigten Variablien für den Parallax-Effekt
   *****************************************************************************/
  let scrollHeight = window.scrollY;
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let parallaxStay = scrollHeight + "px";
  let parallaxMoveRight = (scrollHeight / windowHeight) * windowWidth + "px";
  let moveDistance = (scrollHeight / windowHeight) * windowWidth;

  /*****************************************************************************
   * Verschieben des Hintergrunds um die Scrollmenge
   *****************************************************************************/
  background.style.marginTop = parallaxStay;

  /*****************************************************************************
   * Ausführen der verscheidenen Beispiele
   *****************************************************************************/
  switch (getExampleNumber()) {
    /***************************************************************************
     * Aufrufen des Codes für das erste Beispiel
     ***************************************************************************/
    case 1:
      example1(parallaxStay, parallaxMoveRight);
      displayNone(1);
      break;

    /***************************************************************************
     * Aufrufen des Codes für das zweite Beispiel
     ***************************************************************************/
    case 2:
      displayNone(0);
      moveDistance -= windowWidth + 700;

      /***********************************************************************
       * Verschieben des Fisch auf die Ausgangsposition
       ***********************************************************************/
      if (moveDistance < 200) {
        example1(parallaxStay, moveDistance + "px");
      } else if (
        scrollHeight + (1 / 10) * (moveDistance - 200) <
        scrollHeight + 200
      ) {
        displayNone(2);

        /*********************************************************************
         * Bewegung nach unten
         *********************************************************************/
        example2(scrollHeight + (1 / 10) * (moveDistance - 200) + "px");
      } else {
        displayNone(0);
        fisch1.style.display = "none";
      }

      break;

    /***************************************************************************
     * Aufrufen des Codes für das dritte Beispiel
     ***************************************************************************/
    case 3:
      displayNone(3);
      example3(parallaxStay, "0px");
      break;
  }
});

/*******************************************************************************
 *  Funktion um den Beispielcode anzuzeigen
 *******************************************************************************/
function openExampleTab(exampleName) {
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(exampleName).style.display = "block";
}

/*******************************************************************************
 *  Funktion um den Fisch samt Text und Tabelle nach unten zu bewegen
 *******************************************************************************/
function example1(parallaxStay, parallaxMoveRight) {
  fisch1.style.marginLeft = parallaxMoveRight;
  fisch1.style.marginTop = parallaxStay;
  textExample1.style.marginLeft = parallaxMoveRight;
  textExample1.style.marginTop = parallaxStay;
  exampleTab1.style.marginTop = parallaxStay;
}

/*******************************************************************************
 *  Funktion um den Fisch samt Text und Tabelle nach unten zu bewegen
 *******************************************************************************/
function example2(parallaxMoveDown) {
  fisch1.style.marginTop = parallaxMoveDown;
  textExample2.style.marginTop = parallaxMoveDown;
  exampleTab2.style.marginTop = parallaxMoveDown;
}

/*******************************************************************************
 *  Funktion um den Fisch samt Text und Tabelle nach unten zu bewegen
 *******************************************************************************/
function example3(parallaxStay, parallaxMoveRight) {
  fisch1.style.marginLeft = parallaxMoveRight;
  textExample3.style.marginLeft = parallaxMoveRight;
  exampleTab3.style.marginLeft = parallaxMoveRight;
  fisch1.style.marginTop = parallaxStay;
  textExample3.style.marginTop = parallaxStay;
  exampleTab3.style.marginTop = parallaxStay;
}

/*******************************************************************************
 *  Funktion alle Beispiele auszuschalten, bis auf die Übergebene
 *******************************************************************************/
function displayNone(except) {
  fisch1.style.display = "block";
  fisch2.style.display = "block";
  exampleTab1.style.display = "block";
  exampleTab2.style.display = "block";
  exampleTab3.style.display = "block";
  exampleTab4.style.display = "block";
  exampleTab5.style.display = "block";
  exampleTab6.style.display = "block";
  textExample1.style.display = "block";
  textExample2.style.display = "block";
  textExample3.style.display = "block";
  textExample4.style.display = "block";
  textExample5.style.display = "block";
  textExample6.style.display = "block";
  if (except != 1) {
    exampleTab1.style.display = "none";
    textExample1.style.display = "none";
  }
  if (except != 2) {
    exampleTab2.style.display = "none";
    textExample2.style.display = "none";
  }
  if (except != 3) {
    exampleTab3.style.display = "none";
    textExample3.style.display = "none";
    fisch2.style.display = "none";
  }
  if (except != 4) {
    exampleTab4.style.display = "none";
    textExample4.style.display = "none";
  }
  if (except != 5) {
    exampleTab5.style.display = "none";
    textExample5.style.display = "none";
  }
  if (except != 6) {
    exampleTab6.style.display = "none";
    textExample6.style.display = "none";
  }
}

/*******************************************************************************
 *  Funktion um zu ermitteln, welches Beispiel ausgeführt werden soll
 *******************************************************************************/
function getExampleNumber() {
  let scrollHeight = window.scrollY;
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let scrollMovement = (scrollHeight / windowHeight) * windowWidth;
  let exampleNumber = 1;

  if (scrollMovement < windowWidth * 1.1) {
    exampleNumber = 1;
  } else if (scrollMovement < 2.2 * windowWidth) {
    exampleNumber = 2;
  } else if (scrollMovement < 5 * windowWidth + 1100) {
    exampleNumber = 3;
  }

  return exampleNumber;
}
