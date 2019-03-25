export class Answer {
  correct: boolean;
  text: string;
}

export class Question {
  text: string;
  answers: Answer[];
}
