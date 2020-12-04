import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductResponse} from '../models/product';
import {environment} from '../../../environments/enviroment.dev';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';

@Injectable()

export class ProductService {

  baseUrl = environment.url;

  constructor(private http: HttpClient) {
  }

  getProduct(): Observable<ProductResponse[]> {
    return this.http.get <ProductResponse[]>(this.baseUrl + '/products').pipe(tap(value =>
        console.log(value)
      ));
  }


}
