import { Author } from './Author';
import { BookFormat } from './BookFormat';

export class Book {
  id: number = 0;
  title: string = "";
  img: string = "";
  author: Author =  new Author(null);
  price: number = 0;
  discount: number = 0
  shortDescription: string  = ""
  bookFormat: BookFormat[]  = [];
  ISBN: string = ""
  averageRating: number = 0;
  numberOfPages: number = 0;

  constructor(book: Book) {
    for(let property in book){
      if(this[property] != undefined){
        this[property] = book[property];
      }
    }
  }

  isEquil(book: Book) : boolean{
    if(this.id !== 0){
      return true;
    }

    return false;
  };
}
