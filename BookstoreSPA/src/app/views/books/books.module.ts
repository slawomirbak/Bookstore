import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookManagerComponent } from './book-manager/book-manager.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookKnowladgeComponent } from './book-knowladge/book-knowladge.component';
import { BookCommentsComponent } from './book-comments/book-comments.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [BookManagerComponent, BookDetailsComponent, BookKnowladgeComponent, BookCommentsComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule
  ]
})
export class BooksModule { }