import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Question } from 'src/app/core/models/Question';

@Component({
  selector: 'app-tests-question',
  templateUrl: './tests-question.component.html',
  styleUrls: ['./tests-question.component.sass']
})
export class TestsQuestionComponent implements OnInit {

  qustionForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TestsQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.qustionForm = this.formBuilder.group({
      content: ['', Validators.required]
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveQuestion(){
    this.dialogRef.close(this.qustionForm.value);
  }
}
