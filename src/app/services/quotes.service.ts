import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Filter } from '../enums/Filter';
import { Quote } from '../models/Quote';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  public quotes: Quote[] = [];

  constructor(private _httpService: HttpService) {}

  public async getAllQuotes(f: Filter, query: string) {
    // this.quotes = (
    //   await this._httpService.get<object, any[]>(
    //     this._httpService.prepareHttpRequestData<object>(
    //       `${environment.apis.quotes}/`,
    //       { filter: f, query }
    //     )
    //   )
    // ).body;

    this.quotes = [
      {
        quote: 'Quote 1 move bitch get out of the way',
        actorName: 'Tom Cruise',
        movieName: 'Mission Impossible',
      },
    ];
  }

  public addQuote() {}
}
