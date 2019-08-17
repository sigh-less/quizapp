//source for images and vars for quiz
const correctAnswerIcon = "mario.jpg";
const wrongAnswerIcon = "bowser.jpg";
const warningIcon = "boo.jpg";
let questionCounter = 0;
let score = 0;
letquestionsCount = BANK.length;

// This function renders a next question and answers
function renderQuestion(){
  $(".questions-form p").text(BANK[questionCounter].question);
  $(".questions-form #option-one").val(BANK[questionCounter].optionone);
  $(".questions-form #option-two").val(BANK[questionCounter].optiontwo);
  $(".questions-form #option-three").val(BANK[questionCounter].optionthree);
  $(".questions-form #option-four").val(BANK[questionCounter].optionfour);
   
  $(".questions-form #option-one").next().text(BANK[questionCounter].optionone);
  $(".questions-form #option-two").next().text(BANK[questionCounter].optiontwo);
  $(".questions-form #option-three").next().text(BANK[questionCounter].optionthree);
  $(".questions-form #option-four").next().text(BANK[questionCounter].optionfour);
}
