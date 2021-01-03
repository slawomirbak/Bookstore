import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Author } from 'src/app/core/models/Author';
import { AuthorService } from 'src/app/core/services/author.service';
import { UploadDialogComponent } from 'src/app/shared/UI/upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-dashboard-add-author',
  templateUrl: './dashboard-add-author.component.html',
  styleUrls: ['./dashboard-add-author.component.scss']
})
export class DashboardAddAuthorComponent implements OnInit {
  isLinear = true;
  authorForm : FormGroup;
  currentAuthor : Author = new Author(null);
  authorAvatar: FormGroup;
  constructor(private _formBuilder: FormBuilder, private authorService: AuthorService,   public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.authorForm = this._formBuilder.group({
      name: ["", Validators.required],
      surname: ["", Validators.required]
    });
  }

  authorFormSave(): void {
    if(this.currentAuthor.isEquil(this.authorForm.value)){
      return;
    }
    if(this.currentAuthor.id === 0){
      this.authorService.create(this.authorForm.value).subscribe((author) => this.currentAuthor = new Author(author));
    } else {
      this.authorService.put(this.currentAuthor.id.toString(), this.currentAuthor).subscribe((author) => this.currentAuthor = new Author(author))
    }
  }

  resetForm() {
    console.log("reset form");
    this.currentAuthor = new Author(null);
    this.ngOnInit();
  }

  openUploadDialog() {
    console.log(this.currentAuthor.id);
    const dialogRef = this.dialog.open(UploadDialogComponent, {
      width: '50%',
      height: '50%',
      data: {
        service: this.authorService,
        onlyOneFile: true,
        itemId: this.currentAuthor.id
      }
    });
  }
}
