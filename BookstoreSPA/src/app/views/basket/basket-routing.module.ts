import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketManagerComponent } from './basket-manager/basket-manager.component';
import { BasketPaymentComponent } from './basket-payment/basket-payment.component';


const routes: Routes = [
  {
    path: 'book-payment', component: BasketPaymentComponent
  },
  { path: '', component: BasketManagerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasketRoutingModule { }
