import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-book-manager',
  templateUrl: './book-manager.component.html',
  styleUrls: ['./book-manager.component.scss']
})
export class BookManagerComponent implements OnInit {

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  book$ = this.bookService.getOne(+this.route.snapshot.paramMap.get('id'));

  ngOnInit() {}

}
