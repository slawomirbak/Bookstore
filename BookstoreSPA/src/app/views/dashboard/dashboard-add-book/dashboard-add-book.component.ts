import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { type, userInfo } from 'os';
import { element } from 'protractor';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Author } from 'src/app/core/models/Author';
import { Book } from 'src/app/core/models/Book';
import { AuthorService } from 'src/app/core/services/author.service';
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
  availableAuthors: Author[] = [];
  selectedAuthors: Author[] = [];
  filteredAuhtors: Observable<Author[]>;
  lastFilter: string = '';

  constructor(private _formBuilder: FormBuilder,private authorService: AuthorService, private bookService: BookService,   public dialog: MatDialog,) { }

  ngOnInit(): void {

    this.bookForm = this._formBuilder.group({
      title: ["", Validators.required],
      language: ["", Validators.required],
      author: [[], Validators.required],


      ISBN: ["", Validators.required],
      numberOfPages: [0, Validators.required],
      shortDescription: ["", Validators.required],
      img: ["", Validators.required],
      publishingHouse: ["", Validators.required],

      releaseDate: ["", Validators.required],
      genre: ["", Validators.required],
      bookFormats: ["", Validators.required],
    });

    this.authorService.getList().subscribe(authors => {
      this.availableAuthors = authors;
    });

    this.filteredAuhtors = this.bookForm.get('author').valueChanges.pipe(
      startWith<string | Author[]>(''),
      map(value => typeof value === 'string' ? value : this.lastFilter),
      map(filter =>this.filter(filter))
    )

    this.savedBook$ = this.bookService.currentBook$;
  }

  filter(filter: string): Author[] {
    this.lastFilter = filter;
    if(filter){
      return this.availableAuthors.filter(option => {
        return option.name.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase())>= 0
        || option.surname.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase())>= 0
      })
    } else {
      return this.availableAuthors.slice();
    }
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

  optionClicked(event: Event, author: Author) {
    event.stopPropagation();
    this.toggleSelection(author)
  }

  toggleSelection(author: Author){
    author.selected = !author.selected
    if(author.selected) {
      this.selectedAuthors.push(author);
    } else {
      const i = this.selectedAuthors.findIndex(value => value.id == author.id);
      this.selectedAuthors.splice(i, 1);
    }

    this.bookForm.get("author").patchValue(this.selectedAuthors)
  }


  displayFn(value: Author[] | string): string | undefined{
    let dispalayValue: string;
    if (Array.isArray(value)) {
      value.forEach((author: Author, index) =>{
        if(index === 0) {
          dispalayValue = author.name + ' ' +  author.surname;
        } else {
          dispalayValue += ' ' + author.name + ' ' +  author.surname;
        }
      });
    } else {
      dispalayValue = value;
    }
    return dispalayValue;
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
