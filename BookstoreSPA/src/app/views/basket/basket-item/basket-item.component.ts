import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { imageRootUrl } from 'src/app/core/const/constUrl';
import { BasketItem } from 'src/app/core/models/BasketItem';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss']
})
export class BasketItemComponent implements OnInit {

  constructor() { }

  imgRootUrl: string = imageRootUrl.url;

  @Input() basketItem: BasketItem;
  @Output() deleteBasketItemEvent: EventEmitter<BasketItem> = new EventEmitter<BasketItem>();
  @Output() addBasketItemEvent: EventEmitter<BasketItem> = new EventEmitter<BasketItem>();
  @Output() substractBasketItemEvent: EventEmitter<BasketItem> = new EventEmitter<BasketItem>();

  ngOnInit(): void {
  }

  deleteBasketItem(basketItem: BasketItem){
    this.deleteBasketItemEvent.emit(basketItem);
  }

  addBasketItem(basketItem: BasketItem){
    this.addBasketItemEvent.emit(basketItem);
  }

  substractBasketItem(basketItem: BasketItem){
    this.substractBasketItemEvent.emit(basketItem);
  }
}
