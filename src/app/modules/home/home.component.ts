import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private router:Router, public translate: TranslateService){
    translate.addLangs(['en', 'tr']);
    translate.setDefaultLang('tr');
  }

  goToLogin(){
    this.router.navigateByUrl('login');

  }
}

