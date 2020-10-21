import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {UserServices} from '../../shared/services/user-services';
import {LoginRequest} from '../../shared/models/user';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              public translate: TranslateService,
              private authService: AuthenticationService,
              private userService: UserServices) {
    translate.addLangs(['en', 'tr']);
    translate.setDefaultLang('en');
  }

  userFound: boolean = false;
  userRole: string;
  roleFound: boolean = false;



  roleDisable(): boolean {
    if (true) {
      console.log(" "+this.userService.isUserRole())
      this.roleFound = false;
    } else {
      this.roleFound = true;
      console.log(this.roleFound+"roles");
    }

    return this.roleFound;
  }

  logoutDisabled(): boolean {
    const token = localStorage.getItem('token');
    if (token == null) {
      this.userFound = true;
    } else {
      this.userFound = false;
    }
    return this.userFound;
  }
  loginDisabled(): boolean {
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
   // this.authService.clearRole();
  }

  get userName() {
    return localStorage.getItem('username');
  }

  ngOnInit(): void {

    this.logoutDisabled();
    this.loginDisabled();
   // this.roleDisable();
  }

}

