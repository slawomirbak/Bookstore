import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Basket } from '../models/Basket';
import { BasketItem } from '../models/BasketItem';
import { Book } from '../models/Book';
import { BookFormat } from '../models/BookFormat';
import { AbstractRepositoryService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService extends AbstractRepositoryService {
  baseEndpoint = 'api/books';

  constructor(http: HttpClient) {
    super(http);
  }
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

  addBasketItem = (basketItem: BasketItem): void => {
    const basket = new Basket();
    basket.basketItems = [...this.currentBasket$.value.basketItems];

    const currentBasketItem = basket.basketItems.find(x => x === basketItem);
    if (!!currentBasketItem){
      currentBasketItem.amount += 1;
      currentBasketItem.totalPrice = currentBasketItem.bookFormat.price * currentBasketItem.amount;
    }

    basket.totalPrice = basket.basketItems.reduce((acc, item) => acc += item.totalPrice, 0);
    this.currentBasket$.next(basket);
  }

  substractBasketItem = (basketItem: BasketItem): void => {
    const basket = new Basket();
    basket.basketItems = [...this.currentBasket$.value.basketItems];

    const currentBasketItem = basket.basketItems.find(x => x === basketItem);
    if (!!currentBasketItem){
      currentBasketItem.amount -= 1;
      currentBasketItem.totalPrice = currentBasketItem.bookFormat.price * currentBasketItem.amount;
    }

    if (currentBasketItem.amount <= 0){
      this.deleteBasketItem(currentBasketItem);
      return;
    }

    basket.totalPrice = basket.basketItems.reduce((acc, item) => acc += item.totalPrice, 0);
    this.currentBasket$.next(basket);
  }

  deleteBasketItem = (basketItem: BasketItem): void => {
    const basket = new Basket();
    basket.basketItems = [...this.currentBasket$.value.basketItems];

    const currentBasketItem = basket.basketItems.find(x => x === basketItem);
    if (!!currentBasketItem){
      basket.basketItems = basket.basketItems.filter(x => x !== currentBasketItem);
    }

    basket.totalPrice = basket.basketItems.reduce((acc, item) => acc += item.totalPrice, 0);
    this.currentBasket$.next(basket);
  }

  payment = (basket: Basket) => {
    return this.post('paymentOrder', basket);
  }

  clearBasket = () => {
    this.currentBasket$.next(new Basket());
  }
}
