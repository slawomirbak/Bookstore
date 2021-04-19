import { Injectable } from '@angular/core';
import { Basket } from '../models/Basket';
import { Book, BookVersion } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }
  baset: Basket[] = [];

  addToBasket(book: Book, bookVersion: BookVersion, quantity: number): boolean {
    // console.log(book)
    // console.log(bookVersion)
    // console.log(quantity)
    //basket item not Book
    // TODO: create new basket item
    // Extedn basket item to cover

    //this.books.push(book);
    return true;
  }
}
