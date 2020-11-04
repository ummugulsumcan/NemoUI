import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private KEY_USERNAME = 'username';

  private cache = false;

  constructor() {


  }

  public getUsername(): string {

    return this.cache ? "" : localStorage.getItem(this.KEY_USERNAME);

  }



}
