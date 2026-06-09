class Quiz {

<<<<<<< HEAD
    // YOUR CODE HERE:
    
=======
>>>>>>> 70f8848e590338394f56dd8d4714e0e861676f5a
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
            const temp = this.questions[i];
            this.questions[i] = this.questions[randomIndex];
            this.questions[randomIndex] = temp;
        }
    }

    checkAnswer(answer) {
<<<<<<< HEAD
  const current = this.getQuestion();
  if (answer === current.answer) {
    this.correctAnswers++;
  }
}
=======
        // get the current question and check if the answer matches
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if (currentQuestion.answer === answer) {
            this.correctAnswers++;
        }
    }
>>>>>>> 70f8848e590338394f56dd8d4714e0e861676f5a

    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
            return false;
        } else {
            return true;
        }
    }
<<<<<<< HEAD
    filterQuestionsByDifficulty(difficulty) {
        if (difficulty !== 1 && difficulty !== 2 && difficulty !== 3) {
            return; // do nothing
  }

  this.questions = this.questions.filter(question => {
    return question.difficulty === difficulty;
        });
    }   

    averageDifficulty(){
        if (this.questions.length === 0) return 0;

  const total = this.questions.reduce((sum, question) => {
    return sum + question.difficulty;
  }, 0);

  return total / this.questions.length;
    };
}

=======

    filterQuestionsByDifficulty(difficulty) {
        // only filter if difficulty is a number between 1 and 3
        if (typeof difficulty !== "number" || difficulty < 1 || difficulty > 3) {
            return;
        }
        this.questions = this.questions.filter(function(q) {
            return q.difficulty === difficulty;
        });
    }

    averageDifficulty() {
        let total = 0;
        for (let i = 0; i < this.questions.length; i++) {
            total += this.questions[i].difficulty;
        }
        return total / this.questions.length;
    }
}
>>>>>>> 70f8848e590338394f56dd8d4714e0e861676f5a
