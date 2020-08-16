import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookshelfRoutingModule } from './bookshelf-routing.module';
import { UserLibraryComponent } from './user-library/user-library.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [UserLibraryComponent],
  imports: [
    CommonModule,
    BookshelfRoutingModule,
    SharedModule
  ]
})
export class BookshelfModule { }
