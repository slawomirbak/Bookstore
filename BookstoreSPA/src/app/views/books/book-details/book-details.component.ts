import { Component, Input, OnInit } from '@angular/core';
import { imageRootUrl } from 'src/app/core/const/constUrl';
import { Book } from 'src/app/core/models/Book';
import { BookService } from 'src/app/core/services/book.service';

enum BookVersion {
    HardCover = 'HardCover',
    Electronic = 'Electronic',
    SoftCover = 'SoftCover'
}

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {

    imgRootUrl: string = imageRootUrl.url;
    selectedVersion: BookVersion;

    @Input() book: Book;

    constructor(private bookService: BookService) {}
    ngOnInit() {
      console.log(this.book)
    }

    onVersionSelected(value: string) {
        this.selectedVersion = BookVersion[value];
    }
}
