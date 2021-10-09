// Get the modal
let modal1 = document.getElementById("modal1");
let modal2 = document.getElementById("modal2");
let modal3 = document.getElementById("modal3");
let modal4 = document.getElementById("modal4");
let modal5 = document.getElementById("modal5");

// Get the button that opens the modal
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");

// Get the <span> element that closes the modal
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("span3");
let span4 = document.getElementById("span4");
let span5 = document.getElementById("span5");

// When the user clicks the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
};
btn2.onclick = function() {
  modal2.style.display = "block";
};
btn3.onclick = function() {
  modal3.style.display = "block";
};
btn4.onclick = function() {
  modal4.style.display = "block";
};
btn5.onclick = function() {
  modal5.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
};
span2.onclick = function() {
  modal2.style.display = "none";
};
span3.onclick = function() {
  modal3.style.display = "none";
};
span4.onclick = function() {
  modal4.style.display = "none";
};
span5.onclick = function() {
  modal5.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal1) {
    modal1.style.display = "none";
  }
  if (event.target === modal2) {
    modal2.style.display = "none";
  }
  if (event.target === modal3) {
    modal3.style.display = "none";
  }
  if (event.target === modal4) {
    modal4.style.display = "none";
  }
  if (event.target === modal5) {
    modal5.style.display = "none";
  }
};