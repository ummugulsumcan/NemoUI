import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AuthenticationService} from '../../shared/services/authentication.service';
import { NgxRolesService} from 'ngx-permissions';
import {LocalStorageService} from 'ngx-webstorage';
import {StorageService} from '../../shared/services/storage.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              public translate: TranslateService,
              private authService: AuthenticationService,
              private roleService: NgxRolesService,
              private storage:LocalStorageService,
              private storageService: StorageService) {

    translate.addLangs(['en', 'tr']);
    translate.setDefaultLang('en');
  }


  userFound: boolean = false;

  //cache: boolean = false;


  userName = this.storageService.getUsername();

  loginDisabled(): boolean {
    const token = localStorage.getItem('token');
    if (token == null) {
      this.userFound = false;
    } else {
      this.userFound = true;
    }
    return this.userFound;
  }

  logoutDisabled(): boolean {
    const token = localStorage.getItem('token');
    if (token == null) {
      this.userFound = false;
    } else {
      this.userFound = true;
    }
    return this.userFound;
  }

  goToShipping() {
    this.router.navigateByUrl('shipping');
  }

  goToPayment() {
    this.router.navigateByUrl('payment');
  }

  goToLogin() {
    this.router.navigateByUrl('login');
  }

  goToCatalog() {
    this.router.navigateByUrl('catalog');
  }




  logout() {
    this.authService.clear();
    this.authService.clearUsername();
    this.roleService.flushRoles();
    this.router.navigateByUrl('home');

  }


  ngOnInit(): void {

    this.loginDisabled();
    this.logoutDisabled();

  }

}

