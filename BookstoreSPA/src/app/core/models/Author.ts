import { Book } from "./Book";

export class Author {
  constructor(author: Author) {
    for(let property in author){
      if(this[property] != undefined){
        this[property] = author[property];
      }
    }
  }

  id: number = 0;
  name: string = "";
  surname: string= "";
  authorAvatar: string = "";
  books: Book[] = [];

  isEquil(author: Author) : boolean{
    if(this.name !== author.name || this.surname !== author.surname){
      return false;
    }
    return true;
  };
}
