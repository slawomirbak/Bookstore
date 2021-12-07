import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksearchRoutingModule } from './booksearch-routing.module';
import { SearchComponent } from './search/search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchBookComponent } from './search-book/search-book.component';


@NgModule({
  declarations: [ SearchComponent, SearchBookComponent],
  imports: [
    CommonModule,
    BooksearchRoutingModule,
    SharedModule
  ]
})
export class BooksearchModule { }
