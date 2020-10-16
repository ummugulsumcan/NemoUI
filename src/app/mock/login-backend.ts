import {LoginRequest, LoginResponse} from '../shared/models/user';
import {HttpEvent, HttpResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';

const users = [
  {
    username: 'admin',
    password: '1234',
    age: 15,
    roles: ['ADMIN'],
    token : 'Bearer'+ Math.random()
  },
  {
    username: 'customer',
    password: '1234',
    age: 15,
    roles: ['CUSTOMER'],
    token : 'Bearer'+ Math.random()
  }
];


export function login(requestString): Observable<HttpEvent<any>> {
  const loginRequest: LoginRequest = JSON.parse(requestString);
  const user = users.find(user => user.username === loginRequest.username && user.password === loginRequest.password);

  if (user) {
    return of(new HttpResponse({
      status: 200, body: <LoginResponse> {
        username: user.username,
        age: user.age,
        roles: user.roles,
        token:user.token
      }
    }));
  } else {
    return throwError({error: 'ERROR'});
  }

}
