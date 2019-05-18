(function() {
  //Create an array of questions
    const myQuestions = [
      {
        question: "Which of the following are consequences associated with climate change",
        answers: {
          a: "Global sea levels are rising at an alarmingly fast rate — 17 centimeters (6.7 inches) in the last century alone and going higher.",
          b: "More extreme weather like droughts, heat waves, and hurricanes",
          c: "Surface temperatures are setting new heat records about each year",
          d: "All of the above"
        },
        correctAnswer: "c"
      },
      {
        question: "Which of the following can impact fuel economy negatively?",
        answers: {
          a: "A dirty air filter",
          b: "Improperly aligned wheels",
          c: "poorly inflate tires",
          d: "All of the above",
        },
        correctAnswer: "d"
      },
      {
        question: "Which of the following is a greenhouse gas?",
        answers: {
          a: "CO2",
          b: "CH4",
          c: "Water Vapor",
          d: "All of the above",
        },
        correctAnswer: "d"
      },
      {
        question: "What is the Greenhouse Effect?",
        answers: {
            a: "When the gasses in our atmosphere trap heat and block it from escaping our planet",
            b: "When you paint your house green to become an environmentalist",
            c: "The name of climate change legislation that passed by congress",
        },
        correctAnswer: "c"
    }]
}
// Make the questions appear and create a time slot of 10 seconds for each question.
var deadline = '2015-12-31';