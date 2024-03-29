import { ILike } from './ILike';
import { IQuestion } from './IQuestion';

export interface ITest{
  id: number;
  name: string;
  author: string;
  createDate: Date;
  likes: ILike[];
  questions: IQuestion[];
  numberOfQuestions: number;
}


export interface ITestDisplay extends ITest {
  thumbUp: number;
  thumbDown: number;
}
