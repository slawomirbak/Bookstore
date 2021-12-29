import { Component, Input, OnInit } from '@angular/core';
import { imageRootUrl } from 'src/app/core/const/constUrl';
import { Book, BookVersion } from 'src/app/core/models/Book';
import { BookFormat } from 'src/app/core/models/BookFormat';
import { BasketService } from 'src/app/core/services/basket.service';
import { BookService } from 'src/app/core/services/book.service';
import { SnackBarInfo } from 'src/app/core/services/snackbar-info.service';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {

    imgRootUrl: string = imageRootUrl.url;
    selectedBookFormat: BookFormat;

    @Input() book: Book;

    constructor(
      private bookService: BookService,
      private basketService: BasketService,
      private snackBarInfo: SnackBarInfo,
      ) {}

    ngOnInit() {
    }

    onVersionSelected(bookFormat: BookFormat) {
        this.selectedBookFormat = bookFormat;
    }

    addToBasket(){
      if (!this.selectedBookFormat) {
        this.snackBarInfo.formError('Please select cover');
        return;
      }

      const addEdToBasket = this.basketService.addToBasket(this.book, this.selectedBookFormat, 1);
      addEdToBasket ? this.snackBarInfo.formOk(`Book ${this.book.title} was added to basket`) : this.snackBarInfo.formError('Item was not added to basket');;
    }

    rateBook = (rateNumber) => {
      this.bookService.rateBook$(this.book.id, rateNumber).subscribe(
        ok => {
            this.snackBarInfo.formOk('Vote successfully completed');
            window.location.reload();
        },
        (error) => {
          if (error.status === 401) {
            this.snackBarInfo.formError('To vote you need to log in');
          } else if (error.status === 400) {
            this.snackBarInfo.formError('To vote you need buy book or complete one of the test');
          } else {
            this.snackBarInfo.formError('Something went wrong');
          }
      });
    }
}
