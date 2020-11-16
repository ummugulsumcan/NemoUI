import {LoginRequest, LoginResponse} from '../shared/models/user';
import {HttpEvent, HttpResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';

const users = [
  {
    username: 'admin',
    password: '1234',
    age: 15,
    roles: 'ADMIN',
    token: 'Bearer' + Math.random()
  },
  {
    username: 'customer',
    password: '1234',
    age: 15,
    roles: 'CUSTOMER',
    token: 'Bearer' + Math.random()
  },
  {
    username: 'ali',
    password: '1234',
    age: 15,
    roles: 'PRODUCT',
    token: 'Bearer' + Math.random()
  },
  {
    username: 'ahmet',
    password: '1234',
    age: 15,
    roles: 'CART',
    token: 'Bearer' + Math.random()
  }
];

export function login(requestString): Observable<HttpEvent<any>> {
  const loginRequest: LoginRequest = JSON.parse(requestString);
  // tslint:disable-next-line:no-shadowed-variable
  const user = users.find(user => user.username === loginRequest.username && user.password === loginRequest.password);

  if (user) {
    return of(new HttpResponse({
      status: 200, body: {
        username: user.username,
        age: user.age,
        roles: user.roles,
        token: user.token
      } as LoginResponse
    }));
  } else {
    return throwError({error: 'ERROR'});
  }

}

export function role(params: any): Observable<HttpEvent<any>> {

  // tslint:disable-next-line:no-shadowed-variable
  const user = users.find(user => user.username === params.get('username'));

  if (user) {
    return of(new HttpResponse({
      status: 200, body: {
        username: user.username,
        age: user.age,
        roles: user.roles,
        token: user.token
      } as LoginResponse
    }));
  }else {
    return throwError({error: 'ERROR'});
  }
}
