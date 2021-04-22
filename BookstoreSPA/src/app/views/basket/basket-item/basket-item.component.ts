import { Component, OnInit, Input } from '@angular/core';
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


  // TODO: add and deltet book from basket
  ngOnInit(): void {
    console.log(this.basketItem)
  }
}
