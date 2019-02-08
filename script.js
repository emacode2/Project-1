// make an array for questions
// add an object to array for each question
// add questionText, choices, correctChoice

/*
questions = [
    {
        quest: "Where is this landmark located?",
        image:
        "https://i2.wp.com/www.designlike.com/wp-content/uploads/2011/12/800px-HagiaSophiaISTANBUL.jpg?resize=600%2C450&ssl=1",
        choices: ["Beirut", "Jerusalem", "Istanbul", "Cairo"],
        correctChoice: "IstanBul",
    correctDiv: "cellsc"
},
{
    quest: "where is this landmark located?",
    image:
    "http://www.worldofwanderlust.com/wp-content/uploads/2015/07/memorial-1000x667.jpg",
    choices: ["New York", "Beijing", "london", "Berlin"],
    correctChoice: "New York",
    correctDiv: "cellsa"
},
{
    quest: "where is this landmark located?",
    image:
    "http://www.worldofwanderlust.com/wp-content/uploads/2015/07/P1010590.jpg",
    choices: ["India", "Malaysia", "Peru", "Mexico"],
    correctChoice: "Peru",
    correctDiv: "cellsb"
},

{
    quest: "where is this landmark located?",
    image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Newark-ohio-longaberger-headquarters-front.jpg/1200px-Newark-ohio-longaberger-headquarters-front.jpg",
    choices: ["Ohio", "Amsterdam", "Massachussetts", "Manchester"],
    correctChoice: "Ohio",
    correctDiv: "cellsa"
}
];

// grab html document
//get find p tag for question
//attach node to p tag
//go to array queastions
//find fisrt object question.
//display on html p tag.

//find first div class cells
// create nodes in the DOM,
// go to questions array
// find first object
// find first property
// display on html
//find second div class (cells)
//create nodes in the DOM,
// go to questions array
// find first object
// find first property
// display on html
// get image in the first object

// display in the dom node for image
// get choices array
// find index for each string in the array
// get divs
// display each string in a separate div

//var firstquestion = document.querySelector(".cell");
//var container = document.querySelector(".container");
*/
/*questions = [
  {
    quest: "what was the most visited country in 2018?",
    choices: ["China", "Italy", "USA", "France"],
    correctChoice: "France",
    correctDiv: ".cellsd"
  },
  {
    quest: "What was the most visited city in 2018?",
    choices: ["Dubai", "Paris", "BangKok", "New York"],
    correctChoice: "Bangkok",
    correctDiv: "cellsc"
  },
  {
    quest: "Pashto is an official language spoken in which country?",
    choices: ["laos", "Afghanistan", "Cambodia", "India"],
    correctChoice: "Afghanistan",
    correctDiv: "cellsb"
  }
];

/*let getquestion = document.querySelector(".prompts");
getquestion.innerHTML = questions[currentquestion].quest;
// document.getElementById(id).style.property = new style

questions[currentquestion].choices.forEach(element => {
  var div = document.createElement("div");
  div.className = "cells";
  div.textContent = element;
  container.appendChild(div);
});
// questions[0].image = {

//url(`questions${currentquest.image}`)";
*/
let mytotal = document.getElementById("total");

let correctans = document.querySelectorAll(".correctbtn");
console.log(correctans);
for (var i = 0; i < correctans.length; i++) {
  correctans[i].addEventListener("click", function(evt) {
    alert("you got it right");
  });
}
let wrongans = document.getElementsByTagName("button");
console.log(wrongans);
for (var i = 0; i < wrongans.length; i++) {
  wrongans[i].addEventListener("click", function(evt) {
    alert("Sorry! wrong! Try again!");
  });
}
