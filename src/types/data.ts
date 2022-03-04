export type Quiz = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: Array<string>;
  length: number;
  question: string;
  type: string;
};

export type Quizs = Array<Quiz>;

export type QuizResponse = {
  response_code: number;
  results: Array<Quiz>;
};
