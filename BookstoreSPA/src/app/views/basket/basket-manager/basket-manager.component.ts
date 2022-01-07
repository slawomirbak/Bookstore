import { Component, OnInit } from '@angular/core';
import { Basket } from 'src/app/core/models/Basket';
import { BasketItem } from 'src/app/core/models/BasketItem';
import { BehaviorSubject } from 'rxjs';
import { BasketService } from 'src/app/core/services/basket.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basket-manager',
  templateUrl: './basket-manager.component.html',
  styleUrls: ['./basket-manager.component.scss']
})
export class BasketManagerComponent implements OnInit {

  basketForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private basketService: BasketService, private router: Router) { }

  currentBasket$: BehaviorSubject<Basket>;

  ngOnInit(): void {
    this.basketForm = this._formBuilder.group({
      delivery: ['', Validators.required],
      payment: ['', Validators.required],
      address: ['', Validators.required],
    });

    this.currentBasket$ = this.basketService.currentBasket$;
  }

  deleteBasketItem(basketItem: BasketItem){
    this.basketService.deleteBasketItem(basketItem);
  }

  addBasketItem(basketItem: BasketItem){
    this.basketService.addBasketItem(basketItem);
  }

  substractBasketItem(basketItem: BasketItem){
    this.basketService.substractBasketItem(basketItem);
  }

  buyBasket = () => {
    this.basketForm.markAllAsTouched();

    if (this.basketForm.valid) {
      const currentBasket = this.currentBasket$.value;
      currentBasket.address = this.basketForm.value.address;
      currentBasket.payment = this.basketForm.value.payment;
      currentBasket.delivery = this.basketForm.value.delivery;

      this.router.navigate(['/basket/book-payment']);
    }
  }

  hasError(controlName: string, errorName: string ): boolean {
    return this.basketForm.controls[controlName].hasError(errorName);
  }
}
