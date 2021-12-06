import { BehaviorSubject, combineLatest } from '@angular-devkit/core/node_modules/rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseEndpoint = 'api/Books/search';
  LIMIT_LOW = 30;

  constructor(private http: HttpClient) {
  }

  search$ = new BehaviorSubject('');
  page$ = new BehaviorSubject(0);
  limit$ = new BehaviorSubject(this.LIMIT_LOW );
  combined = combineLatest(this.search$, this.page$, this.limit$);
  total$ = new BehaviorSubject(0);
  totalPages$ =  combineLatest(this.total$, this.limit$).pipe(
    map(([total, limit]) => {
        if (limit !== 0){
            return Math.ceil(total / limit);
        }
    })
  );

  serarchResult$ = this.combined.pipe(
    switchMap(([search, page, limit]) => {

    const params: any = {};

    if (search) {
      params.query = search;
      params.page = page;
      params.limit = limit;
    }

    return this.http.get(`${environment.apiBasePath}/${this.baseEndpoint}`, {params});
  }),
  tap((result: any) => {
    return this.setTotal(result.total)}
  ),
  map(result => result.data)
  );

  setSearch = (term: string) => {
    this.search$.next(term);
  }

  setLimit(limit) {
    this.limit$.next(limit);
  }

  setTotal(total) {
      this.total$.next(total);
  }

  setPage(value: number) {
      const currentValue = this.page$.getValue();
      this.page$.next(currentValue + value);
  }
}
