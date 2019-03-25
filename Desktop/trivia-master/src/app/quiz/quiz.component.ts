import { Component, OnInit } from '@angular/core';
import {Answer, Question} from './quiz.model';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: Question[];
  correctAnswers: number;
  currentQuestionIndex: number;
  quizIsOver: boolean;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
    this.quizIsOver = false;
    this.quizService.getQuestions()
      .subscribe(questions => this.questions = questions);
  }

  onSelect(answer: Answer){
    if (answer.correct) {
      this.correctAnswers++;
      console.log('answer correct');
    }
    else {
      console.log('answer wrong');
    }
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex === this.questions.length) {
      this.quizIsOver = true;
    }
  }

}
