document.addEventListener("DOMContentLoaded", () => {
  /************  HTML ELEMENTS  ************/
  // View divs
  const quizView = document.querySelector("#quizView");
  const endView = document.querySelector("#endView");

  // Quiz view elements
  const progressBar = document.querySelector("#progressBar");
  const questionCount = document.querySelector("#questionCount");
  const questionContainer = document.querySelector("#question");
  const choiceContainer = document.querySelector("#choices");
  const nextButton = document.querySelector("#nextButton");

  // End view elements
  const resultContainer = document.querySelector("#result");


  /************  SET VISIBILITY OF VIEWS  ************/

  // Show the quiz view (div#quizView) and hide the end view (div#endView)
  quizView.style.display = "block";
  endView.style.display = "none";


  /************  QUIZ DATA  ************/

  const questions = [
    new Question("What is 2 + 2?", ["3", "4", "5", "6"], "4", 1),
    new Question("What is the capital of France?", ["Miami", "Paris", "Oslo", "Rome"], "Paris", 1),
    new Question("Who created JavaScript?", ["Plato", "Brendan Eich", "Lea Verou", "Bill Gates"], "Brendan Eich", 2),
    new Question("What is the mass–energy equivalence equation?", ["E = mc^2", "E = m*c^2", "E = m*c^3", "E = m*c"], "E = mc^2", 3),
  ];
  const quizDuration = 120; // 120 seconds (2 minutes)


  /************  QUIZ INSTANCE  ************/

  const quiz = new Quiz(questions, quizDuration, quizDuration);
  quiz.shuffleQuestions();


  /************  SHOW INITIAL CONTENT  ************/

  const minutes = Math.floor(quiz.timeRemaining / 60).toString().padStart(2, "0");
  const seconds = (quiz.timeRemaining % 60).toString().padStart(2, "0");

  const timeRemainingContainer = document.getElementById("timeRemaining");
  timeRemainingContainer.innerText = `${minutes}:${seconds}`;

  // Show first question
  showQuestion();


  /************  TIMER  ************/

  let timer = setInterval(function() {
    quiz.timeRemaining--;

    const mins = Math.floor(quiz.timeRemaining / 60).toString().padStart(2, "0");
    const secs = (quiz.timeRemaining % 60).toString().padStart(2, "0");
    timeRemainingContainer.innerText = `${mins}:${secs}`;

    if (quiz.timeRemaining <= 0) {
      clearInterval(timer);
      showResults();
    }
  }, 1000);


  /************  EVENT LISTENERS  ************/

  nextButton.addEventListener("click", nextButtonHandler);


  /************  FUNCTIONS  ************/

  function showQuestion() {
    // If the quiz has ended, show the results
    if (quiz.hasEnded()) {
      clearInterval(timer);
      showResults();
      return;
    }

    // Clear the previous question text and question choices
    questionContainer.innerText = "";
    choiceContainer.innerHTML = "";

    // Get the current question from the quiz
    const question = quiz.getQuestion();
    question.shuffleChoices();

<<<<<<< HEAD
    // YOUR CODE HERE:
    //
    // 1. Show the question
    // Update the inner text of the question container element and show the question text
    questionContainer.innerText = question.text;
    
    // 2. Update the green progress bar
    // Update the green progress bar (div#progressBar) width so that it shows the percentage of questions answered
    
   const progress = (quiz.currentQuestionIndex / quiz.questions.length) * 100;
progressBar.style.width = `${progress}%`;
 // This value is hardcoded as a placeholder
=======
    // 1. Show the question text
    questionContainer.innerText = question.text;

    // 2. Update the progress bar
    const progressPercent = (quiz.currentQuestionIndex / quiz.questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
>>>>>>> 70f8848e590338394f56dd8d4714e0e861676f5a

    // 3. Update the question count
    questionCount.innerText = `Question ${quiz.currentQuestionIndex + 1} of ${quiz.questions.length}`;

    // 4. Create radio inputs for each choice
    for (let i = 0; i < question.choices.length; i++) {
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "choice";
      input.value = question.choices[i];

<<<<<<< HEAD
    // 3. Update the question count text 
    // Update the question count (div#questionCount) show the current question out of total questions
    
    questionCount.innerText = `Question ${quiz.currentQuestionIndex + 1} of ${questions.length}`;
 //  This value is hardcoded as a placeholder
=======
      const label = document.createElement("label");
      label.innerText = question.choices[i];
>>>>>>> 70f8848e590338394f56dd8d4714e0e861676f5a

      const br = document.createElement("br");

<<<<<<< HEAD
    
    // 4. Create and display new radio input element with a label for each choice.
    // Loop through the current question `choices`.
      // For each choice create a new radio input with a label, and append it to the choice container.
      // Each choice should be displayed as a radio input element with a label:
      /* 
          <input type="radio" name="choice" value="CHOICE TEXT HERE">
          <label>CHOICE TEXT HERE</label>
        <br>
      */
      // Hint 1: You can use the `document.createElement()` method to create a new element.
      // Hint 2: You can use the `element.type`, `element.name`, and `element.value` properties to set the type, name, and value of an element.
      // Hint 3: You can use the `element.appendChild()` method to append an element to the choices container.
      // Hint 4: You can use the `element.innerText` property to set the inner text of an element.
      question.choices.forEach(choice => {
  // Create radio input
  const input = document.createElement("input");
  input.type = "radio";
  input.name = "choice";
  input.value = choice;
  input.id = choice; // para vincular el label

  // Create label
  const label = document.createElement("label");
  label.innerText = choice;
  label.htmlFor = choice; // hace clickeable el label

  // Line break
  const br = document.createElement("br");

  // Append to container
  choiceContainer.appendChild(input);
  choiceContainer.appendChild(label);
  choiceContainer.appendChild(br);
});
      
  } 


  
  function nextButtonHandler() {
  // 1. Get all radio inputs
  const choices = document.querySelectorAll('input[name="choice"]');

  // 2. Find selected answer
  let selectedChoice = null;

  choices.forEach(choice => {
    if (choice.checked) {
      selectedChoice = choice.value;
    }
  });

  // 3. If an answer is selected, check it and move on
  if (selectedChoice) {
    quiz.checkAnswer(selectedChoice);
    quiz.moveToNextQuestion();
    showQuestion();
  } else {
    alert("Please select an answer");
  }
}

=======
      choiceContainer.appendChild(input);
      choiceContainer.appendChild(label);
      choiceContainer.appendChild(br);
    }
  }


  function nextButtonHandler() {
    let selectedAnswer;

    // 1. Get all the choice elements
    const allChoices = document.querySelectorAll("input[name='choice']");

    // 2. Loop through and find which one is selected
    for (let i = 0; i < allChoices.length; i++) {
      if (allChoices[i].checked) {
        selectedAnswer = allChoices[i].value;
      }
    }

    // 3. If an answer is selected, check it and move to next question
    if (selectedAnswer) {
      quiz.checkAnswer(selectedAnswer);
      quiz.moveToNextQuestion();
      showQuestion();
    }
  }
>>>>>>> 70f8848e590338394f56dd8d4714e0e861676f5a


  function showResults() {
    // 1. Hide the quiz view
    quizView.style.display = "none";

    // 2. Show the end view
    endView.style.display = "flex";
<<<<<<< HEAD
    
    // 3. Update the result container (div#result) inner text to show the number of correct answers out of total questions
    resultContainer.innerText = `You scored ${quiz.correctAnswers} out of ${quiz.questions.length} correct answers!`; // This value is hardcoded as a placeholder
=======

    // 3. Show the score
    resultContainer.innerText = `You scored ${quiz.correctAnswers} out of ${quiz.questions.length} correct answers!`;
>>>>>>> 70f8848e590338394f56dd8d4714e0e861676f5a
  }

});
