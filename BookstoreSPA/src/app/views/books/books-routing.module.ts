import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCreateTestComponent } from './book-create-test/book-create-test.component';
import { BookManagerComponent } from './book-manager/book-manager.component';


const routes: Routes = [
  {
    path: ':id',
    component: BookManagerComponent
  },
  {
    path: 'tests/create/:id',
    component: BookCreateTestComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
