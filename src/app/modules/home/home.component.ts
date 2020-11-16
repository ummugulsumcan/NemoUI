import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {NgxRolesService} from 'ngx-permissions';
import {LocalStorageService} from 'ngx-webstorage';
import {StorageService} from '../../shared/services/storage.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  userFound = false;
  constructor(private router: Router,
              public translate: TranslateService,
              private authService: AuthenticationService,
              private roleService: NgxRolesService,
              private storage: LocalStorageService,
              private storageService: StorageService,
              @Inject(PLATFORM_ID) private platformId: any) {
  }

  get userName(): string {

    if (isPlatformBrowser(this.platformId)) {

      return this.storageService.getUsername();
    }
  }

  loginDisabled(): boolean {
    if (isPlatformBrowser(this.platformId)) {

      const token = this.storageService.getToken();

      if (token == null) {
        this.userFound = false;
      } else {
        this.userFound = true;
      }
      return this.userFound;
    }
  }

  logoutDisabled(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = this.storageService.getToken();

      if (token == null) {
        this.userFound = false;
      } else {
        this.userFound = true;
      }
      return this.userFound;
    }
  }

  goToShipping(): void {
    this.router.navigateByUrl('shipping');
  }

  goToPayment(): void {
    this.router.navigateByUrl('payment');
  }

  goToLogin(): void {
    this.router.navigateByUrl('login');
  }

  goToCatalog(): void {
    this.router.navigateByUrl('catalog');
  }


  logout(): void {
    this.authService.clear();
    this.authService.clearUsername();
    this.roleService.flushRoles();
    this.router.navigateByUrl('home');
  }


  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      this.translate.addLangs(['en', 'tr']);
      this.translate.setDefaultLang('en');
    }
    this.loginDisabled();
    this.logoutDisabled();

  }

}

