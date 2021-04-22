import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketManagerComponent } from './basket-manager/basket-manager.component';


const routes: Routes = [
  { path: '', component: BasketManagerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasketRoutingModule { }
