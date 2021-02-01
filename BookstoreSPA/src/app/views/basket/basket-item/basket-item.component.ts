import { Component, OnInit, Input } from '@angular/core';
import { BasketItem } from 'src/app/core/models/BasketItem';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss']
})
export class BasketItemComponent implements OnInit {

  constructor() { }

  @Input() basketItem: BasketItem;

  ngOnInit(): void {
  }
}
