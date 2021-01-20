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
  selected: boolean = false;

  isEquil = (author: Author) : boolean => {
    let response: boolean = true;
    for (let property in author) {
      response = this.checkIfTheSame(this[property], author[property]);
      if(!response){
        return response;
      }
    }
    return response;
  };

  private checkIfTheSame = (propertyOne, propertyTwo): boolean => {
    console.log(propertyOne)
    console.log(propertyTwo)
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

