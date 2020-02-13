import { Component, OnInit } from '@angular/core';
import { Opinion } from 'src/app/core/models/Opinion';
import { forkJoin} from 'rxjs';
import {of } from 'rxjs'
import { PageEvent } from '@angular/material';
@Component({
  selector: 'app-book-comments',
  templateUrl: './book-comments.component.html',
  styleUrls: ['./book-comments.component.scss']
})
export class BookCommentsComponent implements OnInit {

  constructor() { }

  opintions: Opinion[] = [
    {
      id: "1",
      authorFullName: "Joen Doe",
      authorAvatar: "https://images-na.ssl-images-amazon.com/images/I/71neT7RtVqL._US230_.jpg",
      authorId: "1",
      created: "16.02.2020",
      description: " Lorem ipsum itd",
      dislikes: 105,
      likes: 25
    },
    {
      id: "1",
      authorFullName: "Joen Doe",
      authorAvatar: "https://images-na.ssl-images-amazon.com/images/I/71neT7RtVqL._US230_.jpg",
      authorId: "1",
      created: "16.02.2020",
      description: " Lorem ipsum itd",
      dislikes: 105,
      likes: 25
    },
    {
      id: "1",
      authorFullName: "Joen Doe",
      authorAvatar: "https://images-na.ssl-images-amazon.com/images/I/71neT7RtVqL._US230_.jpg",
      authorId: "1",
      created: "16.02.2020",
      description: " Lorem ipsum itd",
      dislikes: 105,
      likes: 25
    }
  ];
  // total lenght of items
  length = 137;
  //current items
  pageSize = 10;
  // option that user can chose
  pageSizeOptions: number[] = [5, 10, 25, 100];

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  onPage(event: PageEvent) {
    console.log('changed page')
  }

  ngOnInit() {

  }

}
