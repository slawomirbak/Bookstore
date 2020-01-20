import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/core/models/Book';

@Component({
  selector: 'app-home-book',
  templateUrl: './home-book.component.html',
  styleUrls: ['./home-book.component.scss']
})
export class HomeBookComponent implements OnInit {

  @Input() book: Book;

  constructor() { }

  ngOnInit() {
  }

}
