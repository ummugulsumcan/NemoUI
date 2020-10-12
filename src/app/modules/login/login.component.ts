import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UsersServices} from '../../shared/services/users-services';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public errorMessage: string;

  charPattern = /^[a-zA-Z]*$/;
  numberPattern = /^[0-9]*$/;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern(this.charPattern)]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.numberPattern)]),
  });

  constructor(http: HttpClient, private router: Router, private userService: UsersServices, public translate: TranslateService) {
    translate.addLangs(['en', 'tr']);
    translate.setDefaultLang('tr');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  ngOnInit(): void {}

  getLogin() {
    this.userService.login(this.loginForm.get('username').value, this.loginForm.get('password').value)
      .subscribe(response =>
      console.log('response:' + JSON.stringify(response))
    )
  }

  getHome() {
    this.router.navigateByUrl('home');
  }

  onSubmit(form: FormGroup) {
    this.markAsTouched(form);
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.get('username').value, this.loginForm.get('password').value)
        .subscribe(response => {
          if (response) {
            this.router.navigateByUrl('home');
            this.errorMessage = null;
          }
        }, (error => {
      this.showErrorMessage('Hatalı username yada parola girdiniz.');
        }));
    } else {
     this.showErrorMessage('Bilgileri eksik girdiniz.');
    }
  }

  showErrorMessage(message: string) {
    return this.errorMessage=message;
  }


  // tslint:disable-next-line:typedef
  markAsTouched(form: FormGroup) {
    (Object as any).values(form.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
