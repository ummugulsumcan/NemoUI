import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UsersServices} from '../../shared/services/users-services';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {LoginRequest} from '../../shared/models/user';

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

  }


  ngOnInit(): void {}

  getHome() {
    this.router.navigateByUrl('home');
  }

  onSubmit(form: FormGroup) {
    this.markAsTouched(form);

    const loginRequest = new LoginRequest();

    loginRequest.username = this.loginForm.get('username').value;
    loginRequest.password = this.loginForm.get('password').value;


    if (this.loginForm.valid) {
      this.userService.login(loginRequest)
        .subscribe(response => {
          if (response) {
            this.router.navigateByUrl('home');
            this.errorMessage = null;
          }
        }, (error => {
          this.showErrorMessage('MESSAGE.INCORRECT');
        }));
    } else {
      this.showErrorMessage('MESSAGE.USER');
    }
  }

  showErrorMessage(message:string) {
    this.errorMessage =  this.translate.instant(message);
    return this.errorMessage;
  }


  // tslint:disable-next-line:typedef
  markAsTouched(form: FormGroup) {
    (Object as any).values(form.controls).forEach(control => {
      control.markAsTouched();
    });
  }





}
