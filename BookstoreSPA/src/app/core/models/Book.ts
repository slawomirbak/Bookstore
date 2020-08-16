import { BookFormat } from './BookFormat';

export class Book {
  id: string;
  title: string;
  authorId: string;
  authorAvatar: string;
  img: string;
  author: string;
  price: number;
  discount: number;
  shortDescription: string;
  format: BookFormat;
}
