import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
  }

  setSearch = (term: string) => {
    this.serachService.setSearch(term);
  }
}
