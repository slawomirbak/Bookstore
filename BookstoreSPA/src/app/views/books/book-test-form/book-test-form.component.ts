import { forEach } from '@angular-devkit/schematics';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IQuestion } from 'src/app/core/models/IQuestion';
import { ITest } from 'src/app/core/models/ITest';
import { KnowledgeService } from 'src/app/core/services/knowledge.service';

@Component({
  selector: 'app-book-test-form',
  templateUrl: './book-test-form.component.html',
  styleUrls: ['./book-test-form.component.scss']
})
export class BookTestFormComponent implements OnInit {

  qustionsForm: FormGroup;

  constructor(private knowledgeService: KnowledgeService, private route: ActivatedRoute, public formBuilder: FormBuilder) { }

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

    console.log("send", this.test);
  }

  hasError = (controlName: string, errorName: string ): boolean  =>{
    const field = (this.qustionsForm.controls.questions as any).controls[controlName].controls.answer;
    if (field.touched) {
      return field.hasError(errorName);
    }
    return false;
  }

  likeTest = (like: boolean) => {
    console.log("hot or not?", like);
  }
  crateStatistics = (test: ITest) => {
    let likes = 0;
    let dislike = 0;

    test.likes.forEach(like => like.isLike ? likes++ : dislike++);
    this.likes = likes;
    this.disLike = dislike;
  }
}
