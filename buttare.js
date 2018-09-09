//TYPEWRITING EFFECT
new TypeIt('#example4', {
speed: 250,
loopDelay: 500,
breakLines: false,
strings: ['WEB DESIGNER', 'GRAPHIC DESIGNER', 'VISUAL DESIGNER', 'SMM'],
loop: true
});

//NAVIGATION MENU
var header = document.getElementById("ulContainer");
var btns = header.getElementsByClassName("navLink");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//SERVICES CARDS FUNCTIONS - 1
function showWhitePic1() {    
var picWhite = document.getElementById("servicesIconStyleHover1");
var picBlack = document.getElementById("servicesIconStyle1");
picWhite.style.display = "block";
picBlack.style.display = "none"; }
function showBlackPic1() {    
var picWhite = document.getElementById("servicesIconStyleHover1");
var picBlack = document.getElementById("servicesIconStyle1");
picWhite.style.display = "none";
picBlack.style.display = "block"; }
//SERVICES CARDS FUNCTIONS - 2
function showWhitePic2() {    
var picWhite = document.getElementById("servicesIconStyleHover2");
var picBlack = document.getElementById("servicesIconStyle2");
picWhite.style.display = "block";
picBlack.style.display = "none"; }
function showBlackPic2() {    
var picWhite = document.getElementById("servicesIconStyleHover2");
var picBlack = document.getElementById("servicesIconStyle2");
picWhite.style.display = "none";
picBlack.style.display = "block"; }
//SERVICES CARDS FUNCTIONS - 3
function showWhitePic3() {    
var picWhite = document.getElementById("servicesIconStyleHover3");
var picBlack = document.getElementById("servicesIconStyle3");
picWhite.style.display = "block";
picBlack.style.display = "none"; }
function showBlackPic3() {    
var picWhite = document.getElementById("servicesIconStyleHover3");
var picBlack = document.getElementById("servicesIconStyle3");
picWhite.style.display = "none";
picBlack.style.display = "block"; }
//SERVICES CARDS FUNCTIONS - 4
function showWhitePic4() {    
var picWhite = document.getElementById("servicesIconStyleHover4");
var picBlack = document.getElementById("servicesIconStyle4");
picWhite.style.display = "block";
picBlack.style.display = "none"; }
function showBlackPic4() {    
var picWhite = document.getElementById("servicesIconStyleHover4");
var picBlack = document.getElementById("servicesIconStyle4");
picWhite.style.display = "none";
picBlack.style.display = "block"; }




