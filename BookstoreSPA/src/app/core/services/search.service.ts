import { BehaviorSubject, combineLatest } from '@angular-devkit/core/node_modules/rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { resourceLimits } from 'worker_threads';
import { AbstractRepositoryService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseEndpoint = 'api/search';
  LIMIT_LOW = 10;
  constructor(private http: HttpClient) {
  }

  search$ = new BehaviorSubject('');
  page$ = new BehaviorSubject(0);
  limit$ = new BehaviorSubject(this.LIMIT_LOW );
  combined = combineLatest(this.search$, this.page$, this.limit$);

  serarchResult$ = this.combined.pipe(switchMap(([search, page, limit])=> {
    const params: any = {};

    if (search) {
      params.query = search;
    }
    return this.http.get(this.baseEndpoint, {params}).pipe(
      map(result => console.log(result))
    )
  }));

  setSearch = (term: string) => {
    this.search$.next(term);
  }
}
