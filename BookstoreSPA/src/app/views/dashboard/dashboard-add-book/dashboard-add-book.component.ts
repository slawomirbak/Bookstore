import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { Book } from 'src/app/core/models/Book';
import { BookService } from 'src/app/core/services/book.service';
import { UploadDialogComponent } from 'src/app/shared/UI/upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-dashboard-add-book',
  templateUrl: './dashboard-add-book.component.html',
  styleUrls: ['./dashboard-add-book.component.scss']
})
export class DashboardAddBookComponent implements OnInit {

  isLinear = false;
  bookForm : FormGroup;
  currentBook : Book = new Book(null);
  savedBook$: BehaviorSubject<Book>;
  constructor(private _formBuilder: FormBuilder, private bookService: BookService,   public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.bookForm = this._formBuilder.group({
      title: ["", Validators.required],
      language: ["", Validators.required],

      ISBN: ["", Validators.required],
      numberOfPages: [0, Validators.required],
      shortDescription: ["", Validators.required],
      img: ["", Validators.required],
      publishingHouse: ["", Validators.required],
      author: ["", Validators.required],
      releaseDate: ["", Validators.required],
      genre: ["", Validators.required],
      bookFormats: ["", Validators.required],
    });



    this.savedBook$ = this.bookService.currentBook$;
  }

  // bookFormSave(): void {
  //   if(this.currentAuthor.isEquil(this.authorForm.value)){
  //     return;
  //   }
  //   this.savedAuthor$.next(this.authorForm.value);

  //   if(this.currentBook.id === 0){
  //     this.authorService.create(this.authorForm.value).subscribe((author) => this.currentAuthor = new Author(author));
  //   } else {
  //     this.authorService.put(this.currentBook.id.toString(), this.currentBook).subscribe((author) => this.currentAuthor = new Author(author))
  //   }
  // }

  bookFormSave(): void {

  }

  resetForm() {
    this.currentBook = new Book(null);
    this.savedBook$.next(null);
    this.ngOnInit();
  }

  openUploadDialog() {
    if(this.currentBook.id === 0){
      return;
    }
    const dialogRef = this.dialog.open(UploadDialogComponent, {
      width: '50%',
      height: '50%',
      data: {
        service: this.bookService,
        onlyOneFile: true,
        itemId: this.currentBook.id
      }
    });
  }

}
