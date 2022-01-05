import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { IQuestion } from 'src/app/core/models/IQuestion';
import { BookService } from 'src/app/core/services/book.service';
import { KnowledgeService } from 'src/app/core/services/knowledge.service';
import { SnackBarInfo } from 'src/app/core/services/snackbar-info.service';
import { TestsQuestionComponent } from 'src/app/shared/UI/tests-question/tests-question.component';

@Component({
  selector: 'app-book-create-test',
  templateUrl: './book-create-test.component.html',
  styleUrls: ['./book-create-test.component.scss']
})
export class BookCreateTestComponent implements OnInit {
  book$ = this.bookService.getOne(+this.route.snapshot.paramMap.get('id'));
  questions: IQuestion[] = [];
  canSave: false;
  testForm: FormGroup;

  constructor(
    private snackBarInfo: SnackBarInfo,
    private _formBuilder: FormBuilder,
    private bookService: BookService,
    private knowledgeService: KnowledgeService,
    private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit() {
    this.testForm = this._formBuilder.group({
      name: ['', Validators.required]
    });
  }

  addQuestion = () => {
    const dialogRef = this.dialog.open(TestsQuestionComponent, {
      width: '50%',
      height: '50%',
      data: {}
    });

    dialogRef.afterClosed().subscribe((question: IQuestion) => {
      if (!!question) {
        this.questions.push(question);
      }
    });
  }

  deleteQuestion = (index: number) => {
    this.questions.splice(index, 1);
  }

  saveQuestions = () => {
    if (!this.testForm.value.name) {
      this.snackBarInfo.formError('Please enter title');
      return;
    }

    const test = {
      numberOfQuestions: this.questions.length,
      questions: this.questions,
      name: this.testForm.value.name
    };

    this.knowledgeService.post(`new/${+this.route.snapshot.paramMap.get('id')}`, test)
      .subscribe(
        ok => {
          this.snackBarInfo.formOk('Test was created successfully.');
        },
        error => {
          this.snackBarInfo.formError(error.statusText);
        });
  }
}
