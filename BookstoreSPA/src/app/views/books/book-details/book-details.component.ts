import { Component, Input, OnInit } from '@angular/core';
import { imageRootUrl } from 'src/app/core/const/constUrl';
import { Book, BookVersion } from 'src/app/core/models/Book';
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
    selectedVersion: BookVersion;

    @Input() book: Book;

    constructor(private bookService: BookService, private basketService: BasketService, private snackBarInfo: SnackBarInfo) {}

    ngOnInit() {
    }

    onVersionSelected(value: string) {
        this.selectedVersion = BookVersion[value];
    }

    addToBasket(){
      if (!this.selectedVersion) {
        this.snackBarInfo.formError('Please select cover');
        return;
      }

      const addEdToBasket = this.basketService.addToBasket(this.book, this.selectedVersion, 1);

      addEdToBasket ? this.snackBarInfo.formOk(`Book ${this.book.title} was added to basket`) : this.snackBarInfo.formError('Item was not added to basket');;
    }
}
