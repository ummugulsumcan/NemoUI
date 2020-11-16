import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/enviroment.dev';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {CustomerResponse} from '../models/customers';

@Injectable()

export class CustomerService {
  baseUrl = environment.url;
  constructor(private http: HttpClient) {
  }

  getCustomers(): Observable<CustomerResponse[]> {
    return this.http.get <CustomerResponse[]>(this.baseUrl + '/customers')
      .pipe(tap(value =>
        console.log(value)
      ));
  }


}
