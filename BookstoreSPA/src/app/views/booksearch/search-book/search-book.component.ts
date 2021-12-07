import { Component, OnInit, Input } from '@angular/core';
import { imageRootUrl } from 'src/app/core/const/constUrl';
import { Book } from 'src/app/core/models/Book';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {

  @Input() book: Book;
  imgRootUrl: string = imageRootUrl.url;

  constructor() { }

  ngOnInit() {
  }

}
