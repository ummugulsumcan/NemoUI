import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/enviroment.dev';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl = environment.url;

  constructor(private http: HttpClient) {
  }

  productSearch(text: string): Observable<void> {
    const params = new HttpParams()
      .set('text', text);
    console.log(JSON.stringify(params));
    return this.http.get <any>(this.baseUrl + '/search', {params}).pipe(map(value =>
      console.log('search value' + value)
  ));
  }
}
