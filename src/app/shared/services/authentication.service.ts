import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable()
export class AuthenticationService {

  constructor(@Inject(PLATFORM_ID) private platformId: any) {

  }


  isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      return token != null;
    }

  }

  clear(): void {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.removeItem('token');
      return token;
    }

  }

  clearUsername(): void {
    if (isPlatformBrowser(this.platformId)) {
      const username = localStorage.removeItem('username');
      return username;
    }

  }

  clearRole(): void {
    if (isPlatformBrowser(this.platformId)) {
      const role = localStorage.removeItem('role');
      return role;
    }

  }


}



