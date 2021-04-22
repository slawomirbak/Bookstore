import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AbstractRepositoryService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class BookService extends AbstractRepositoryService {
  baseEndpoint = 'api/books';
  constructor(http: HttpClient) {
    super(http);
  }

  currentBook$ = new BehaviorSubject(null);

  updateCurrentObj$ = (itemId) => {
    console.log(itemId);
    return this.getOne(itemId).pipe(tap(data => {
      this.currentBook$.next(data);
    }));
  }
}
