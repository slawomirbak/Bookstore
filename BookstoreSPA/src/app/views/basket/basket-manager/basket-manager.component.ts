import { Component, OnInit } from '@angular/core';
import { Basket } from 'src/app/core/models/Basket';
import { BasketItem } from 'src/app/core/models/BasketItem';
import { Book } from 'src/app/core/models/Book';
import { BookFormat } from 'src/app/core/models/BookFormat';

@Component({
  selector: 'app-basket-manager',
  templateUrl: './basket-manager.component.html',
  styleUrls: ['./basket-manager.component.scss']
})
export class BasketManagerComponent implements OnInit {

  constructor() { }

  basket: Basket;

  ngOnInit(): void {
    //TODO: get all items from?
    //Provision data
    this.basket = new Basket();
    const book: Book = {
      id: '1',
      authorId: '1',
      title: 'The Likely Resolutions of Oliver Clock',
      img: 'https://images-na.ssl-images-amazon.com/images/I/41%2Bm0LRG%2B2L.jpg',
      authorAvatar: 'https://images-na.ssl-images-amazon.com/images/I/71neT7RtVqL._US230_.jpg',
      author: 'Jane Riley',
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: 2.09,
      discount: 10,
      format: BookFormat.SoftCover
    };
    const basketItem = new BasketItem();
    basketItem.book = book;
    basketItem.amount = 1;
    this.basket.basketItem.push(basketItem);

  }
}
