import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { imageRootUrl } from 'src/app/core/const/constUrl';
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
  imgRootUrl: string = imageRootUrl.url;
  isLinear = false;
  bookForm: FormGroup;
  bookFormat: FormGroup;
  currentBook: Book = new Book(null);
  savedBook$: BehaviorSubject<Book>;
  availableAuthors: Author[] = [];
  selectedAuthors: Author[] = [];
  filteredAuhtors: Observable<Author[]>;
  lastFilter = '';

  get formats(): FormArray{
    return <FormArray>this.bookForm.get('bookFormats');
  }

  constructor(private _formBuilder: FormBuilder, private authorService: AuthorService, private bookService: BookService,   public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.bookForm = this._formBuilder.group({
      title: ["", Validators.required],
      language: ["", Validators.required],
      author: [[], Validators.required],
      isbn: ["", Validators.required],
      numberOfPages: [0, Validators.required],
      shortDescription: ["", Validators.required],
      publishingHouse: ["", Validators.required],
      releaseDate: [new Date(), Validators.required],
      genre: ["", Validators.required],
      bookFormats: this._formBuilder.array([]),
      img: ["", Validators.required],
    });

    this.bookFormat = this.buildFormat();

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

  buildFormat(bookFormat = null): FormGroup {
    if(!bookFormat){
      return this._formBuilder.group({
        quantity: 0,
        format:'SoftCover',
        price: 0,
        discount: 0,
      })
    }
    return this._formBuilder.group({
      quantity: bookFormat.get("quantity").value,
      format: bookFormat.get("format").value,
      price: bookFormat.get("price").value,
      discount: bookFormat.get("discount").value,
    });
  }

  addBookFormat() {
    this.formats.push(this.buildFormat(this.bookFormat));
  }

  deleteFormat(index: number){
    this.formats.removeAt(index);
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

  bookFormSave(): void {
    if(this.currentBook.isEquil(this.bookForm.value)){
      return;
    }

    this.savedBook$.next(this.bookForm.value);

    if(this.currentBook.id === 0){
      this.bookService.create(this.bookForm.value).subscribe((book) => this.currentBook = new Book(book));
    } else {
      this.currentBook.copyValue(this.bookForm.value);
      console.log(this.currentBook)
      this.bookService.put(this.currentBook.id.toString(), this.currentBook).subscribe((book) => this.currentBook = new Book(book))
    }
  }

  resetForm() {
    this.currentBook = new Book(null);
    this.savedBook$.next(null);
    this.ngOnInit();
  }

  optionClicked(event: Event, author: Author) {
    event.stopPropagation();
    this.toggleSelection(author);
  }

  toggleSelection(author: Author){
    author.selected = !author.selected;
    if(author.selected) {
      this.selectedAuthors.push(author);
    } else {
      const i = this.selectedAuthors.findIndex(value => value.id == author.id);
      this.selectedAuthors.splice(i, 1);
    }

    this.bookForm.get("author").patchValue(this.selectedAuthors);
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
