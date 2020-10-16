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

  disabled: boolean = false;

  tokenDisabled(): boolean {
    const token = localStorage.getItem('token');
    if(token == null) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
    return this.disabled;
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
    this.router.navigateByUrl('login');
  }

  get UserName() {
    return localStorage.getItem('username');
  }

  ngOnInit(): void {
    this.tokenDisabled();

  }

}

