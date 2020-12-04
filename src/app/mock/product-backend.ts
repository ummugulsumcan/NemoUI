import {Observable, of, throwError} from 'rxjs';
import {HttpEvent, HttpResponse} from '@angular/common/http';
import {formatDate} from '@angular/common';
import {ProductResponse} from '../shared/models/product';


const products = [

  {
    id: 1, name: 'Samsung S5', price: 1000, imageUrl: '1.jpg', description: 'İdare eder', category: 'Telefon',
    createDate: formatDate(new Date(2020, 11, 22), 'yyyy-MM-dd', 'en-US')
  },
  {
    id: 1, name: 'Samsung S5', price: 1000, imageUrl: '2.jpg', description: 'İdare eder', category: 'Bilgisayar',
    createDate: formatDate(new Date(2020, 11, 23), 'yyyy-MM-dd', 'en-US')
  },
  {
    id: 3, name: 'Samsung S7', price: 3000, imageUrl: '3.jpg', description: 'İyi', category: 'Telefon',
    createDate: formatDate(new Date(2020, 11, 24), 'yyyy-MM-dd', 'en-US')
  },
  {
    id: 4, name: 'Samsung S8', price: 4000, imageUrl: '4.jpg', description: 'İdare eder', category: 'Telefon',
    createDate: formatDate(new Date(2020, 11, 25), 'yyyy-MM-dd', 'en-US')
  },
  {
    id: 5, name: 'Samsung S9', price: 5000, imageUrl: '5.jpg', description: 'İdare eder', category: 'Tablet',
    createDate: formatDate(new Date(2020, 11, 26), 'yyyy-MM-dd', 'en-US')
  },
  {
    id: 6, name: 'Samsung S10', price: 6000, imageUrl: '6.jpg', description: 'Kötü', category: 'Telefon',
    createDate: formatDate(new Date(2020, 11, 27), 'yyyy-MM-dd', 'en-US')
  },
  {
    id: 7, name: 'Samsung S11', price: 7000, imageUrl: '7.jpg', description: 'Kötü', category: 'Telefon',
    createDate: formatDate(new Date(2020, 11, 28), 'yyyy-MM-dd', 'en-US')
  },
];


export function getProductList(): Observable<HttpEvent<any>> {

  return of(new HttpResponse({
      status: 200, body: products
    }
  ));

}


export function getProductALL(params: any): Observable<HttpEvent<any>> {
  console.log(JSON.stringify(params));
  const page = Number(params.map.get('page')[0]);
  const pageSize = Number(params.map.get('pageSize')[0]);
  const index = (page - 1) * (pageSize);
  const productList = products.slice(index, index + pageSize);
  const totalItem = products.length;
  const pageNumbers = Array(Math.ceil(totalItem / pageSize)).fill(0).map((a, i) => i + 1);
  if (page != null && pageSize != null) {
    return of(new HttpResponse({
        status: 200, body: {
          page, pageSize, productList, totalItem, pageNumbers
        }
      }
    ));
  } else {
    return of(new HttpResponse({
        status: 200, body: {
          products
        }
      }
    ));
  }
}

export function getProductSearch(params: any): Observable<HttpEvent<any>> {
  console.log(JSON.stringify(params));
  const product = products.find(productOne => productOne.name === params.get('text') ||
    productOne.id === params.get('text') || productOne.price === params.get('text') || productOne.imageUrl === params.get('text')
    || productOne.description === params.get('text') || productOne.category === params.get('text')
  );
  if (product) {
    return of(new HttpResponse({
      status: 200, body: {
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        description: product.description,
        category: product.category,
      } as ProductResponse
    }));
  } else {
    return throwError({error: 'ERROR'});
  }

}
