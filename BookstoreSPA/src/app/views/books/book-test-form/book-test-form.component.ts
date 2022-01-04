import { forEach } from '@angular-devkit/schematics';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ILike } from 'src/app/core/models/ILike';
import { IQuestion } from 'src/app/core/models/IQuestion';
import { ITest } from 'src/app/core/models/ITest';
import { ITestResult } from 'src/app/core/models/ITestResult';
import { KnowledgeService } from 'src/app/core/services/knowledge.service';
import { SnackBarInfo } from 'src/app/core/services/snackbar-info.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-book-test-form',
  templateUrl: './book-test-form.component.html',
  styleUrls: ['./book-test-form.component.scss']
})
export class BookTestFormComponent implements OnInit {

  qustionsForm: FormGroup;

  constructor(
    private knowledgeService: KnowledgeService,
    private snackBarInfo: SnackBarInfo,
    private route: ActivatedRoute,
    private userService: UserService,
    public formBuilder: FormBuilder) { }

  test: ITest;
  likes = 0;
  disLike = 0;

  get questions(): FormArray{
    return this.qustionsForm.get('questions') as FormArray;
  }

  ngOnInit(): void {
    this.knowledgeService.getSimle(`test/${+this.route.snapshot.paramMap.get('id')}`).subscribe(test => {
      this.test = test;

      console.log("on init", this.test);

      test.questions.forEach(question => {
        this.questions.push(this.buildQuestions(question));
      });

      this.crateStatistics(test);
    });

    this.qustionsForm = this.formBuilder.group({
      questions:  this.formBuilder.array([]),
    });
  }

  private buildQuestions(question: IQuestion): FormGroup {
    return this.formBuilder.group({
      answer: ['', Validators.required]
    });
  }

  checkTest() {
    this.qustionsForm.markAllAsTouched();

    if (!this.qustionsForm.valid) {
      return;
    }

    this.test.questions.forEach((question, index) => {
      question.answer = this.qustionsForm.value.questions[index].answer;
    });

    this.knowledgeService.post('checkTest', this.test).subscribe(
      (testResult: ITestResult) => {
        if (testResult.passed){
          this.snackBarInfo.formOk(`You passed the test with ${testResult.goodAnswers}/
          ${testResult.totalQuestions} points, now you can rate the book!`);
        } else {
          this.snackBarInfo.formError(`Sorry, you didn't pass the test with ${testResult.goodAnswers}/
          ${testResult.totalQuestions} points`);
        }
      },
      error => {
        this.snackBarInfo.formError(error.errorMessage);
      }
    );
  }

  hasError = (controlName: string, errorName: string ): boolean  =>{
    const field = (this.qustionsForm.controls.questions as any).controls[controlName].controls.answer;
    if (field.touched) {
      return field.hasError(errorName);
    }
    return false;
  }

  likeTest = (isLike: boolean) => {
    this.userService.user$.subscribe(user => {
      const wasLiked = this.test?.likes?.find(like => like.userId === user.id);
      let liked;

      if (wasLiked) {
        liked = wasLiked;
        liked.isLike = isLike;
      } else {
        liked  = {
          isLike,
          userId: user.id,
          testId: this.test.id,
        } as ILike;
      }

      this.knowledgeService.post('like', liked).subscribe( ok => {
        this.snackBarInfo.formOk(`You ${isLike ? 'liked' : 'dislike'} the test`);

        if (wasLiked) {
          wasLiked.isLike = isLike;
        } else {
          this.test.likes.push(liked);
        }

        this.crateStatistics(this.test);
      }, error => {
        this.snackBarInfo.formError('To vote you need to log in.');
      });
    }, error => {
      this.snackBarInfo.formError('To vote you need to log in.');
    });
  }

  crateStatistics = (test: ITest) => {
    let likes = 0;
    let dislike = 0;

    test.likes.forEach(like => like.isLike ? likes++ : dislike++);
    this.likes = likes;
    this.disLike = dislike;
  }
}
