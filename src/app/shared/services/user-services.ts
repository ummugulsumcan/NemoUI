import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginRequest, LoginResponse} from '../models/user';
import {environment} from '../../../environments/enviroment.dev';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class UserServices {

  baseUrl = environment.url;

  constructor(private http: HttpClient) {}

  login(loginRequest:LoginRequest): Observable<LoginResponse> {

    return this.http.post<LoginResponse>(this.baseUrl + '/users', JSON.stringify(loginRequest)).pipe(map(response=>{
      const token = response.token;
      const username=response.username;
      localStorage.setItem('username',username);
      localStorage.setItem('token',token);
      return response;
    }))

  }


}



