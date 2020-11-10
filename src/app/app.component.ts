import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {isPlatformBrowser} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';


  constructor(public translate: TranslateService,
            ) {
    translate.addLangs(['en', 'tr']);
    translate.setDefaultLang('en');
  }

  // tslint:disable-next-line:typedef
  switchLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit () {

  }



}

