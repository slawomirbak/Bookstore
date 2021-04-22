import { Book, BookVersion } from './Book';
import { BookFormat } from './BookFormat';

export class BasketItem {
  book: Book;
  amount: number;
  totalPrice: number;
  bookFormat: BookFormat;

  constructor(book: Book, amount: number, bookFormat: BookFormat) {
    this.book = book;
    this.amount = amount;
    this.bookFormat = bookFormat;
    this.totalPrice = bookFormat.price * amount;
  }
}
