import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private KEY_USERNAME = 'username';

  private cache = false;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {


  }

  getUsername(): string {

    if (isPlatformBrowser(this.platformId)) {
      return this.cache ? "" : localStorage.getItem(this.KEY_USERNAME);
    }


  }

  getToken(): string {

    if (isPlatformBrowser(this.platformId)) {

      return localStorage.getItem('token');
    }
  }


}
