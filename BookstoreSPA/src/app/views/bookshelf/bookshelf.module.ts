import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookshelfRoutingModule } from './bookshelf-routing.module';
import { UserLibraryComponent } from './user-library/user-library.component';


@NgModule({
  declarations: [UserLibraryComponent],
  imports: [
    CommonModule,
    BookshelfRoutingModule
  ]
})
export class BookshelfModule { }
