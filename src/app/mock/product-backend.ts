import {Observable, of} from 'rxjs';
import {HttpEvent, HttpResponse} from '@angular/common/http';


const products = [
  {id: 1, name: 'Samsung S5', price: 1000, imageUrl: '1.jpg', description: 'İdare eder', category: 'Telefon'},
  {id: 2, name: 'Samsung S6', price: 2000, imageUrl: '2.jpg', description: 'İyi', category: 'Telefon'},
  {id: 3, name: 'Samsung S7', price: 3000, imageUrl: '3.jpg', description: 'İyi', category: 'Telefon'},
  {id: 4, name: 'Samsung S8', price: 4000, imageUrl: '4.jpg', description: 'İdare eder', category: 'Telefon'},
  {id: 5, name: 'Samsung S9', price: 5000, imageUrl: '5.jpg', description: 'İdare eder', category: 'Telefon'},
  {id: 6, name: 'Samsung S10', price: 6000, imageUrl: '6.jpg', description: 'Kötü', category: 'Telefon'},
  {id: 7, name: 'Samsung S11', price: 7000, imageUrl: '7.jpg', description: 'Kötü', category: 'Telefon'},
];

export function getProductList(): Observable<HttpEvent<any>> {

  return of(new HttpResponse({
      status: 200, body: products
    }
  ));

}
