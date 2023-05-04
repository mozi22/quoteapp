import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/app/enums/Filter';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public filters = [
    { name: Filter.All, selected: true },
    { name: Filter.Actors, selected: false },
    { name: Filter.Movies, selected: false },
  ];

  public loading = false;
  constructor(public quoteService: QuotesService) {}

  ngOnInit(): void {
    this.quoteService.getAllQuotes(Filter.All, '');
  }

  public search(query: string) {
    this.quoteService.getAllQuotes(this.getSelectedFilter().name, query);
  }

  public changeFilter(filterObj: { name: Filter; selected: boolean }) {
    this.filters.forEach((filter, idx) => {
      filter.selected = filter.name === filterObj.name;
    });
  }

  public getSelectedFilter(): { name: Filter; selected: boolean } {
    return this.filters.filter((f) => f.selected)[0];
  }
}
