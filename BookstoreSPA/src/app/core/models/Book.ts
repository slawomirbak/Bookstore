import { Author } from './Author';
import { BookFormat } from './BookFormat';

export class Book {
  id: number = 0;
  title: string = "";
  img: string = "";
  author: Author =  new Author(null);
  shortDescription: string  = "";
  bookFormats: BookFormat[]  = [];
  isbn: string = "";
  averageRating: number = 0;
  numberOfPages: number = 0;
  publishingHouse: string = "";
  releaseDate: Date = new Date();
  genre: string = "";
  language: string = "";
  tableofContents: string = "";
  tests = [];
  comments = [];
  bookRatings = [];

  constructor(book: Book) {
    for(let property in book){
      if(this[property] != undefined){
        this[property] = book[property];
      }
    }
  }

  isEquil = (book: Book) : boolean => {
    let response: boolean = true;
    for (let property in book) {
      response = this.checkIfTheSame(this[property], book[property]);
      if(!response){
        return response;
      }
    }
    return response;
  };

  private checkIfTheSame = (propertyOne, propertyTwo): boolean => {
    let response = true;
    if(typeof propertyOne === "object" && typeof propertyTwo === "object"){
      for (let property in propertyOne){
        response = this.checkIfTheSame(propertyOne[property], propertyTwo[property]);
      }
    }
    if(propertyOne != propertyTwo) {
      response = false;
      return response;
    }
    return response;
  }
}
