import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookManagerComponent } from './book-manager/book-manager.component';


const routes: Routes = [
  {
    path: ':id',
    component: BookManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
