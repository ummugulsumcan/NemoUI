import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {LoginRequest, LoginResponse} from '../models/user';
import {environment} from '../../../environments/enviroment.dev';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {NgxRolesService} from 'ngx-permissions';
import {StorageService} from './storage.service';


@Injectable()
export class UserService implements OnInit {

  baseUrl = environment.url;

  constructor(private http: HttpClient,
              private ngRoleService: NgxRolesService,
              private storageService: StorageService) {
  }

  ngOnInit(): void {}

  login(loginRequest: LoginRequest): Observable<LoginResponse> {

    return this.http.post<LoginResponse>(this.baseUrl + '/users', JSON.stringify(loginRequest)).pipe(map(response => {
      const token = response.token;
      const username = response.username;

      localStorage.setItem('username', username);
      localStorage.setItem('token', token);

      this.ngRoleService.addRole(response.roles, []);

      return response;
    }));
  }


  role(): Observable<LoginResponse> {

    const params = new HttpParams().set('username', this.storageService.getUsername());

    return this.http.get<LoginResponse>(this.baseUrl + '/users', {params: params})
      .pipe(tap(res => this.ngRoleService.addRole(res.roles, [])));

  }

  async addRoles() {

    if (this.storageService.getUsername()) {

      const loginResponse = await this.role().toPromise();

      if (this.storageService.getUsername() == loginResponse.username) {

        this.ngRoleService.addRole(loginResponse.roles, []);

      }

    }
  }


}



