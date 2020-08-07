import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksearchRoutingModule } from './booksearch-routing.module';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [ SearchComponent],
  imports: [
    CommonModule,
    BooksearchRoutingModule
  ]
})
export class BooksearchModule { }
