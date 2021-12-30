import { IQuestion } from './IQuestion';

export interface ITest{
  id: number;
  name: string;
  author: string;
  createDate: Date;
  likes: number;
  dislike: number;
  questions: IQuestion[];
  numberOfQuestions: number;
}
