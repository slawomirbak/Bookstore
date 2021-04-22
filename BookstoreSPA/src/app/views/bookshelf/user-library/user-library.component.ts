import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/Book';
import { BookFormat } from 'src/app/core/models/BookFormat';

@Component({
  selector: 'app-user-library',
  templateUrl: './user-library.component.html',
  styleUrls: ['./user-library.component.scss']
})
export class UserLibraryComponent implements OnInit {

  constructor() { }
  books: Book[] = [];

  ngOnInit(): void {
  }
}
