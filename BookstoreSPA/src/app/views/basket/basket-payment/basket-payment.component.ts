import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from 'src/app/core/services/basket.service';

@Component({
  selector: 'app-basket-payment',
  templateUrl: './basket-payment.component.html',
  styleUrls: ['./basket-payment.component.scss']
})
export class BasketPaymentComponent implements OnInit {

  constructor(private basketService: BasketService ) { }

  ngOnInit(): void {
    const basket = this.basketService.currentBasket$.value;
    this.basketService.payment(basket).subscribe();
    this.basketService.clearBasket();
  }
}
