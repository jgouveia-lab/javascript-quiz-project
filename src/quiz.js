class Quiz {
    // YOUR CODE HERE:
    
    constructor (questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    
    moveToNextQuestion() {
        this.currentQuestionIndex++;
    }

    shuffleQuestions() {
        for (let i = 0; i < this.questions.length; i++) {
        const randomIndex = Math.floor(Math.random() * this.questions.length);

    // swap array[i] with array[randomIndex]
        const temp = this.questions[i];
        this.questions[i] = this.questions[randomIndex];
        this.questions[randomIndex] = temp;
  }
    }

    checkAnswer(answer) {
        this.correctAnswers++;
    }

    hasEnded(){
        if(this.currentQuestionIndex < this.questions.length) {
            return false;
        } else {
            return true;
        }
    }
}