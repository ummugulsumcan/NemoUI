import {Injectable} from '@angular/core';
import {environment} from '../../../environments/enviroment.dev';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CustomPaginationService {
  baseUrl = environment.url;

  constructor(private http: HttpClient) {
  }


  getProductPaged(pageNumber: number, pageSize: number): Observable<any> {
    const params = new HttpParams()
      .set('page', pageNumber.toString())
      .set('pageSize', pageSize.toString());
    console.log(JSON.stringify(params));
    return this.http.get <any>(this.baseUrl + '/pages', {params}).pipe(tap(value =>
      console.log(value)
    ));
  }
}

