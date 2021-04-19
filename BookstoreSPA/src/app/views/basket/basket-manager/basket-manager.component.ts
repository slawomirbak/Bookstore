import { Component, OnInit } from '@angular/core';
import { Basket } from 'src/app/core/models/Basket';
import { BasketItem } from 'src/app/core/models/BasketItem';
import { Book } from 'src/app/core/models/Book';
import { BookFormat } from 'src/app/core/models/BookFormat';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-basket-manager',
  templateUrl: './basket-manager.component.html',
  styleUrls: ['./basket-manager.component.scss']
})
export class BasketManagerComponent implements OnInit {

  constructor() { }

  basket: Basket;
  totalAmunt$ = new BehaviorSubject(0);

  ngOnInit(): void {
    //TODO: get all items from?
    //Provision data
    this.basket = new Basket();
    const book: any = {

    };
    const basketItem = new BasketItem();
    basketItem.book = book;
    basketItem.amount = 1;
    //basketItem.totalPrice = basketItem.book.price * basketItem.amount;
    this.basket.basketItems.push(basketItem);
    this.basket.totalPrice = this.basket.basketItems.reduce((acc, item) => acc += item.totalPrice, 0);
  }

  changeTotalAmount(value: number) {
    this.totalAmunt$.next(value);
  }
}
