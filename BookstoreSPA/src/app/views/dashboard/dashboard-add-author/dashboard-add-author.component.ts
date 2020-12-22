import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Author } from 'src/app/core/models/Author';
import { AuthorService } from 'src/app/core/services/author.service';

@Component({
  selector: 'app-dashboard-add-author',
  templateUrl: './dashboard-add-author.component.html',
  styleUrls: ['./dashboard-add-author.component.scss']
})
export class DashboardAddAuthorComponent implements OnInit {
  isLinear = true;
  authorForm : FormGroup;
  currentAuthor : Author;
  authorAvatar: FormGroup;
  constructor(private _formBuilder: FormBuilder, private authorService: AuthorService) { }


  ngOnInit(): void {
    this.authorForm = this._formBuilder.group({
      name: ["", Validators.required],
      surname: ["", Validators.required]
    });
  }

  authorFormSave(): void {
    this.authorService.create(this.authorForm.value).subscribe(author => this.currentAuthor = author);
  }
}
