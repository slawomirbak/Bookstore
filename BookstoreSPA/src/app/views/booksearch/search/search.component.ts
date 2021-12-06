import { combineLatest } from '@angular-devkit/core/node_modules/rxjs';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private serachService: SearchService) { }

  search$ = this.serachService.search$;
  serarchResult$ = this.serachService.serarchResult$;
  page$ = this.serachService.page$;
  totalPages$ = this.serachService.totalPages$;
  userPage$ = this.page$.pipe(map(page => page + 1));
  isFirtPage$ = this.page$.pipe(map(page => page === 0));
  isLastPage$ = combineLatest(this.totalPages$ , this.userPage$).pipe(
        map(([totalpage, userPage]) => {
            return totalpage ===  userPage;
        })
  );

  ngOnInit(): void {
  }

  setSearch = (term: string) => {
    this.serachService.setSearch(term);
  }

  changeLimit(limit){
    this.serachService.setLimit(limit);
    this.page$.next(0);
  }

  changePage(value: number){
      this.serachService.setPage(value);
  }
}
