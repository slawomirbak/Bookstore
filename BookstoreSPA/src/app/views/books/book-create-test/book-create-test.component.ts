import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/core/models/Question';
import { BookService } from 'src/app/core/services/book.service';
import { TestsQuestionComponent } from 'src/app/shared/UI/tests-question/tests-question.component';

@Component({
  selector: 'app-book-create-test',
  templateUrl: './book-create-test.component.html',
  styleUrls: ['./book-create-test.component.scss']
})
export class BookCreateTestComponent implements OnInit {
  book$ = this.bookService.getOne(+this.route.snapshot.paramMap.get('id'));
  public questions: Question[] = [];

  constructor(private bookService: BookService, private route: ActivatedRoute, private dialog: MatDialog) { }
  ngOnInit() {}

  addQuestion = () => {
    const dialogRef =this.dialog.open(TestsQuestionComponent, {
      width: '50%',
      height: '50%',
      data: {
      }
    });

    dialogRef.afterClosed().subscribe((question: Question) => {
      if(!!question){
        this.questions.push(question);
      }
    });
  }
}
