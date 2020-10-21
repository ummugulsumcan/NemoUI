import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServices} from '../../shared/services/user-services';
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
  returnUrl: string;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern(this.charPattern)]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.numberPattern)]),
  });

  constructor(http: HttpClient,
              private router: Router,
              private userService: UserServices,
              public translate: TranslateService,
              private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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
            if (localStorage.getItem('token') != null ) {
              this.router.navigateByUrl(this.returnUrl);
              this.errorMessage = null;
            } else {
              this.router.navigateByUrl('login');
            }
          }
        }, (error => {
          this.showErrorMessage('MESSAGE.INCORRECT');
        }));
    } else {
      this.showErrorMessage('MESSAGE.USER');
    }
  }

  showErrorMessage(message: string) {
    this.errorMessage = this.translate.instant(message);
    return this.errorMessage;
  }

  // tslint:disable-next-line:typedef
  markAsTouched(form: FormGroup) {
    (Object as any).values(form.controls).forEach(control => {
      control.markAsTouched();
    });
  }


}
