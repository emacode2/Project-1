// make an array for questions
// add an object to array for each question
// add questionText, choices, correctChoice

var answers = [
  {
    question: "what was the most visited country in 2018?",
    choices: ["China", "Italy", "USA", "France"],
    correctChoice: "France",
    correctDiv: ".cellsd"
  },
  {
    question: "What was the most visited city in 2018?",
    choices: ["Dubai", "Paris", "BangKok", "New York"],
    correctChoice: "Bangkok",
    correctDiv: "cellsc"
  },
  {
    question: "Where is this landmark located?",
      image: "https://i2.wp.com/www.designlike.com/wp-content/uploads/2011/12/800px-HagiaSophiaISTANBUL.jpg?resize=600%2C450&ssl=1",
    choices: ["Beirut","Jerusalem","Istanbul","Cairo"],
    correctchoice: "IstanBul",
    correctDiv: "cellsc"
  },
  {
    Question: "where is this landmark located?",
    image:
      "http://www.worldofwanderlust.com/wp-content/uploads/2015/07/memorial-1000x667.jpg",
    choices: ["New York", "Beijing","london", "Berlin"],
    correctchoice: "New York",
    correctDiv: "cellsa"
  },
  {
    Question: "where is this landmark located?",
      image: "http://www.worldofwanderlust.com/wp-content/uploads/2015/07/P1010590.jpg",
    choices: ["India","Malaysia","Peru","Mexico"],
    correctchoice: "Peru",
    correctDiv: "cellsb"
  },

  {
    Question: "where is this landmark located?",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Newark-ohio-longaberger-headquarters-front.jpg/1200px-Newark-ohio-longaberger-headquarters-front.jpg",
    choices: ["Ohio","Amsterdam","Massachussetts","Manchester"],
    correctchoice: "Ohio",
    correctDiv: "cellsa"
  },

/*var populateCells = document.getElementsByClassName("cells");
{
    cells[0].innerHTML = answers[0].choices[0];
    cells[1].innerHTML = answers[0].choices[1];
    cells[2].innerHTML = answers[0].choices[2];
    cells[3].innerHTML = answers[0].choices[3];
    cells[4].innerHTML = answers[0].choices[4];
    cells[5].innerHTML = answers[0].choices[5];
}    
/*var divCells = document.getElementsByClassName("cells");

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', turnRed);
}

/*var questions = document.getElementsByTagName("p");
setFirstQues = questions.innerHTML = answers[0].question[0];

/*let grabCellDiv = 
 for (var i=0; i<grabCellDiv.length; i++)
grabCellDiv[i]=answers.choices[i]

*/

var grabCellDiv = document.getElementsByClassName("cells");

var setFirst = (grabCellDiv[0].innerHTML = answers[0].choices[0]);
var setsecond = (grabCellDiv[1].innerHTML = answers[0].choices[1]);
var setthird = (grabCellDiv[2].innerHTML = answers[0].choices[2]);
var setfourth = (grabCellDiv[3].innerHTML = answers[0].choices[3]);


