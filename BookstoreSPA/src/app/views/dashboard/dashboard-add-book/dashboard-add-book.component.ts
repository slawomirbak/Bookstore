import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-add-book',
  templateUrl: './dashboard-add-book.component.html',
  styleUrls: ['./dashboard-add-book.component.scss']
})
export class DashboardAddBookComponent implements OnInit {

  isLinear = true;
  bookForm : FormGroup
  constructor(private _formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.bookForm = this._formBuilder.group({
      name: ["", Validators.required]
    });
  }

}
