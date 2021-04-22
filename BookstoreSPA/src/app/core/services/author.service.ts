import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AbstractRepositoryService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends AbstractRepositoryService {
  baseEndpoint = 'api/authors'
  constructor(http: HttpClient) {
    super(http);
  }

  currentAuthor$ = new BehaviorSubject(null);

  updateCurrentObj$ = (itemId): Observable<any> => {
    console.log(itemId);
    return this.getOne(itemId).pipe(tap(data => {
      this.currentAuthor$.next(data);
    }));
  }
}
