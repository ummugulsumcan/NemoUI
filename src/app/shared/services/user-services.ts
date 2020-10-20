import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginRequest, LoginResponse} from '../models/user';
import {environment} from '../../../environments/enviroment.dev';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as Rx from 'rxjs';

@Injectable()
export class UserServices implements OnInit {

  baseUrl = environment.url;

  // private userSubject: BehaviorSubject<string>;

  constructor(private http: HttpClient) {

  }

  subject = new BehaviorSubject<string>('');

  roleData: string;

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.baseUrl + '/users', JSON.stringify(loginRequest)).pipe(map(response => {
      const token = response.token;
      const username = response.username;
      const role = response.roles;

     // console.log('response roller:' + role);

      this.subject.next(role);

      this.subject.subscribe(value =>
        console.log('roller value :' + value)
      );

      localStorage.setItem('username', username);
      localStorage.setItem('token', token);
      // localStorage.setItem('role',role);

      return response;
    }));

  }

  ngOnInit(): void {}

  isUserRole(): string {

     this.subject.subscribe(val =>
      this.roleData = val);
   // console.log('role Data:' + this.roleData);
     return this.roleData;
  }


}



