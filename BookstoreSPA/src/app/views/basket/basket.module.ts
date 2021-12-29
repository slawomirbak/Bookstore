import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketRoutingModule } from './basket-routing.module';
import { BasketManagerComponent } from './basket-manager/basket-manager.component';
import { BasketItemComponent } from './basket-item/basket-item.component';
import { BookFormatPipe } from 'src/app/core/pipes/bookFormat.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { BasketPaymentComponent } from './basket-payment/basket-payment.component';

@NgModule({
  declarations: [BasketManagerComponent, BasketItemComponent, BookFormatPipe, BasketPaymentComponent],
  imports: [
    CommonModule,
    BasketRoutingModule,
    SharedModule
  ]
})
export class BasketModule { }
