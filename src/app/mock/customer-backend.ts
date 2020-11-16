import {Observable, of} from 'rxjs';
import {HttpEvent, HttpResponse} from '@angular/common/http';

const customers = [
  {id: 1, name: 'Ümmügülsüm', surName: 'CAN', address: 'İstanbul', countryName: 'Türkiye'},
  {id: 2, name: 'Selin', surName: 'DALDABAN', address: 'Kastamonu', countryName: 'Türkiye'},
  {id: 3, name: 'Merve', surName: 'ÖZDEMİR', address: 'Tokat', countryName: 'Türkiye'},
  {id: 4, name: 'Büşra', surName: 'CAN', address: 'Iğdır', countryName: 'Türkiye'}
];

export function getUsersList(): Observable<HttpEvent<any>> {

  return of(new HttpResponse({
      status: 200, body: customers
    }
  ));

}
