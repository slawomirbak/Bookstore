import { Component, OnInit } from '@angular/core';
import { Basket } from 'src/app/core/models/Basket';
import { BasketItem } from 'src/app/core/models/BasketItem';
import { Book } from 'src/app/core/models/Book';
import { BookFormat } from 'src/app/core/models/BookFormat';
import { BehaviorSubject } from 'rxjs';
import { BasketService } from 'src/app/core/services/basket.service';

@Component({
  selector: 'app-basket-manager',
  templateUrl: './basket-manager.component.html',
  styleUrls: ['./basket-manager.component.scss']
})
export class BasketManagerComponent implements OnInit {

  constructor(private basketService: BasketService) { }

  currentBasket$: BehaviorSubject<Basket>;

  ngOnInit(): void {
    this.currentBasket$ = this.basketService.currentBasket$;
  }
}
