let mytotal = document.getElementById("total");
console.log(mytotal);
let totalCorrect = 0;

let correctans = document.querySelectorAll(".correct-btn");
console.log(correctans);
for (let i = 0; i < correctans.length; i++) {
  correctans[i].addEventListener("click", function(evt) {
    alert("you got it right");
    totalCorrect = totalCorrect + 1;
    mytotal.innerHTML = totalCorrect;
    console.log(mytotal);
  });
}

let wrongans = document.querySelectorAll(".wrong-btn");
console.log(wrongans);
for (let i = 0; i < wrongans.length; i++) {
  wrongans[i].addEventListener("click", function(evt) {
    alert("Sorry! wrong! Try again!");
  });
}
let reset = document.getElementById("reset-btn");
reset.addEventListener("click", function(evt) {
  alert("start over");
  mytotal.innerHTML = "";
});
