import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/Book';
import { ITest } from 'src/app/core/models/ITest';
import { KnowledgeService } from 'src/app/core/services/knowledge.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-book-knowladge',
  templateUrl: './book-knowladge.component.html',
  styleUrls: ['./book-knowladge.component.scss']
})
export class BookKnowladgeComponent implements OnInit {

  @Input() book: Book;
  canCrateTest = false;

  constructor(private userService: UserService, private knowledgeService: KnowledgeService) { }

  bookTests: ITest[] = [];

  ngOnInit() {
    this.knowledgeService.getSimle(`${this.book.id}`).subscribe(
      tests => {
        this.bookTests = tests;
      }
    );

    this.userService.user$.subscribe(user => {
      if (this.book.bookRead.length > 0) {
        this.canCrateTest =  !!this.book.bookRead.find(bookRead => bookRead?.userId === user?.id);
      }
    });
  }
}
