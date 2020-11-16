import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../shared/services/user-service';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {LoginRequest} from '../../shared/models/user';
import {StorageService} from '../../shared/services/storage.service';
import {isPlatformBrowser} from '@angular/common';


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
              private userService: UserService,
              public translate: TranslateService,
              private route: ActivatedRoute,
              private storageService: StorageService,
              @Inject(PLATFORM_ID) private platformId: any
              ) {
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  onSubmit(form: FormGroup): void{
    this.markAsTouched(form);
    const loginRequest = new LoginRequest();
    loginRequest.username = this.loginForm.get('username').value;
    loginRequest.password = this.loginForm.get('password').value;


    if (this.loginForm.valid) {
      this.userService.login(loginRequest)
        .subscribe(response => {
          if (response) {
            if (isPlatformBrowser(this.platformId)){
              if (this.storageService.getToken() != null) {
                this.router.navigateByUrl(this.returnUrl);

                this.errorMessage = null;
              } else {
                this.router.navigateByUrl('login');
              }
            }

          }
        }, (error => {
          this.showErrorMessage('MESSAGE.INCORRECT');
        }));
    } else {
      this.showErrorMessage('MESSAGE.USER');
    }
  }


  showErrorMessage(message: string): string{
    this.errorMessage = this.translate.instant(message);
    return this.errorMessage;
  }

  markAsTouched(form: FormGroup): void {
    (Object as any).values(form.controls).forEach(control => {
      control.markAsTouched();
    });
  }


}
