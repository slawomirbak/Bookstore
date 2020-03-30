import { BookFormat } from './BookFormat';

export class Book {
  id: string;
  authorId: string;
  title: string;
  authorAvatar: string;
  img: string;
  author: string;
  price: number;
  discount: number;
  shortDescription: string;
  format: BookFormat;
}
