import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, lastValueFrom, of } from 'rxjs';
import { IHttpRequest } from '../models/IHttpRequest';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public async get<T, R>(
    data: IHttpRequest<T>,
    _httpOptions = {
      headers: this.getHeaders(),
      params: {},
      withCredentials: true,
    }
  ): Promise<any> {
    return lastValueFrom(
      this.http
        .get<any>('/', {
          ..._httpOptions,
          observe: 'response',
        })
        .pipe(catchError(this.handleError))
    );
  }
  public prepareHttpRequestData<T>(
    requestUrl: string,
    data: T
  ): IHttpRequest<T> {
    return {
      requestUrl,
      data,
    };
  }

  private handleError(error: HttpErrorResponse) {
    return of(error);
  }

  private getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      accept: '*/*',
    });
  }
}
