
var questions= [ 
    {
 question: "Which of the following are consequences associated with climate change",
 choices: {
   a: "Global sea levels are rising at an alarmingly fast rate — 17 centimeters (6.7 inches) in the last century alone and going higher.",
   b: "More extreme weather like droughts, heat waves, and hurricanes",
   c: "Surface temperatures are setting new heat records about each year",
   d: "All of the above"
 },
 correctAnswer: "d"
},
{
 question: "Which of the following can impact fuel economy negatively?",
 choices: {
     a: "A dirty air filte", 
     b: "Improperly aligned wheels",
     c:" jjj",
     d: "All of the above"
 },
 correctAnswer: "d"
},
{
 question: "Which of the following is a greenhouse gas?",
 choices: {
    a:"CO2", 
    b:"CH4", 
    c:"Water Vapo",
    d:"All of the above",
 },
 correctAnswer: "d"
},
{
 question: "What is the Greenhouse Effect?",
 choices: {
     a: "When the gasses in our atmosphere trap heat and block it from escaping our planet",
     b: "When you paint your house green to become an environmentalist",
     c: "The name of climate change legislation that passed by congress",
     d:"00"
 },
 correctAnswer: "c"
 }
];


// i = 0; is i less than questions.length (which is 4) true, so it ncrements 1 and then does the code 
// i = 1... checks again.. its true... increments,,, does code again
// console.log(questions[i]);
// set up question{ div in html... then set up question[0].question to the text or innerthtml or w.e.
// make the buttons' innertext or html as the questions[0].choices. choices is an array, so you will have to loop over it 
// and when you loop over it you'll change the text of each choice button on the html


function renderQuestion(obj) {

    $("#question").text(obj.question)
    $("#btn0").text(obj.choices.a)
    $("#btn1").text(obj.choices.b)
    $("#btn2").text(obj.choices.c)
    $("#btn3").text(obj.choices.d)

}

// take your choices array -> loop through them -> create a button, change the text, and then append it to a div on the page.

// questionCounter = 0... eventlisteners to prev/next buttons. they inceement or decrement the counter and then render the page again

var questionCounter = 0; 
renderQuestion(questions[questionCounter]);

$("#next").on("click", function () {
    questionCounter++
    renderQuestion(questions[questionCounter]);
})