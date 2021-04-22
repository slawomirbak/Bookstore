import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/Book';
import { BookTest } from 'src/app/core/models/BookTest';

@Component({
  selector: 'app-book-knowladge',
  templateUrl: './book-knowladge.component.html',
  styleUrls: ['./book-knowladge.component.scss']
})
export class BookKnowladgeComponent implements OnInit {

  @Input() book: Book;

  constructor() { }

  bookTests: BookTest[] = [
    {
      id: "1",
      author: 'Joe doe',
      likes: 365,
      dislike: 150
    },
    {
      id: "2",
      author: 'Joe doe',
      likes: 365,
      dislike: 150
    }
  ];

  ngOnInit() {
  }

}
