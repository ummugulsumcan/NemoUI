import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() {

  }


  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token != null;
  }

  clear() {
    const token = localStorage.removeItem('token');
    return token;
  }

  clearUsername() {
    const username = localStorage.removeItem('username');
    return username;
  }

  clearRole() {
    const role = localStorage.removeItem('role');
    return role;
  }


}



