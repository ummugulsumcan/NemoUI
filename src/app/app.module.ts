import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {UserService} from './shared/services/user-service';
import {LoginComponent} from './modules/login/login.component';
import {HomeComponent} from './modules/home/home.component';
import {CommonModule} from '@angular/common';
import {fakeBackendProvider} from './mock/fake-backend.interceptor';
import {AuthenticationService} from './shared/services/authentication.service';
import {NotFoundComponent} from './shared/module/layout/pages/not-found/not-found.component';
import {AuthenticationGuard} from './guard/authentication-guard';
import {NgxPermissionsModule} from 'ngx-permissions';
import {AuthorizationGuard} from './guard/authorization-guard';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {UnauthComponent} from './modules/unAuth/unauth.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    UnauthComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    NgxPermissionsModule.forRoot(),
    NgxWebstorageModule.forRoot(),


  ],
  providers: [UserService,
    fakeBackendProvider,
    AuthenticationService,
    AuthenticationGuard,
    AuthorizationGuard,
    {
      provide: APP_INITIALIZER,
      useFactory: (us: UserService) => async function() {
        return await us.addRoles();
      },
      deps: [UserService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  exports: [MatButtonModule]

})
export class AppModule {
}

// tslint:disable-next-line:typedef
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
