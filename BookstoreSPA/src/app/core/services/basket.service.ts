import { Injectable } from '@angular/core';
import { Basket } from '../models/Basket';
import { BasketItem } from '../models/BasketItem';
import { Book, BookVersion } from '../models/Book';
import { BookFormat } from '../models/BookFormat';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }
  basket: Basket = new Basket();

  addToBasket(book: Book, bookFormat: BookFormat, amount: number): boolean {
    const basketItem = new BasketItem(book, amount, bookFormat);
    this.basket.basketItems.push(basketItem);
    this.basket.totalPrice += basketItem.totalPrice;
    console.log(this.basket);
    return true;
  }
}
