import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './views/home/home.module';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => HomeModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./views/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./views/books/books.module').then(m => m.BooksModule)
  },
  {
    path: 'basket',
    loadChildren: () => import('./views/basket/basket.module').then( m => m.BasketModule)
  },
  {
    path: 'bookshelf',
    loadChildren: () => import('./views/bookshelf/bookshelf.module').then( m => m.BookshelfModule)
  },
  {
    path: 'booksearch',
    loadChildren: () => import('./views/booksearch/booksearch.module').then(m => m.BooksearchModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
