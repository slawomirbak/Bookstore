import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Basket } from '../models/Basket';
import { BasketItem } from '../models/BasketItem';
import { Book, BookVersion } from '../models/Book';
import { BookFormat } from '../models/BookFormat';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }
  currentBasket$ = new BehaviorSubject(new Basket());

  addToBasket = (book: Book, bookFormat: BookFormat, amount: number): boolean => {
    const basket = new Basket();
    basket.basketItems = [...this.currentBasket$.value.basketItems];
    const basketItem = new BasketItem(book, amount, bookFormat);

    basket.basketItems.push(basketItem);
    basket.totalPrice = basket.basketItems.reduce((acc, item) => acc += item.totalPrice, 0);

    this.currentBasket$.next(basket);
    return true;
  }
}
