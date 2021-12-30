import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IQuestion } from 'src/app/core/models/IQuestion';

@Component({
  selector: 'app-tests-question',
  templateUrl: './tests-question.component.html',
  styleUrls: ['./tests-question.component.scss']
})
export class TestsQuestionComponent implements OnInit {

  qustionForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TestsQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.qustionForm = this.formBuilder.group({
      sentence: ['', Validators.required],
      answer: ['', Validators.required],
      a: ['', Validators.required],
      b: ['', Validators.required],
      c: ['', Validators.required],
      d: ['', Validators.required],
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveQuestion(){
    this.dialogRef.close(this.qustionForm.value);
  }
}
