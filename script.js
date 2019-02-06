const choices1 = document.querySelectorAll(".cells");

for (let i = 0; i < choices1.length; i++) {
  choices1[i].addEventListener("click", function(evt) {
    evt.target.style.backgroundColor = "red";
  });
}

//document.getElementsByClassName("cells").innerHTML = "France";
//let answers = cells.length
//choices1[5].addEventListener("click", function (evt) {
//       evt.target.style.backgroundColor = "green"
