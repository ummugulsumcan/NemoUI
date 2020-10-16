import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AuthenticationService} from '../../shared/services/authentication.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              public translate: TranslateService,
              private authService: AuthenticationService) {
    translate.addLangs(['en', 'tr']);
    translate.setDefaultLang('en');
  }

  userFound: boolean = false;

  tokenDisabled(): boolean {
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

  goToShop() {
    this.router.navigateByUrl('shop');
  }

  goToProduct() {
    this.router.navigateByUrl('product');
  }

  goToLogin() {
    this.router.navigateByUrl('login');
  }

  logout() {
    this.authService.clear();
    this.authService.clearUsername();
    this.router.navigateByUrl('home');
  }

  get userName() {
    return localStorage.getItem('username');
  }

  ngOnInit(): void {
    this.tokenDisabled();
    this.logoutDisabled();

  }

}

