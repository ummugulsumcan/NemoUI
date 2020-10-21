import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {UserServices} from './shared/services/user-services';
import {LoginComponent} from './modules/login/login.component';
import {HomeComponent} from './modules/home/home.component';
import {CommonModule} from '@angular/common';
import {fakeBackendProvider} from './mock/fake-backend.interceptor';
import {AuthenticationService} from './shared/services/authentication.service';
import { ShopComponent } from './modules/shop/shop.component';
import { ProductComponent } from './modules/product/product.component';
import {NotFoundComponent} from './shared/module/layout/pages/not-found/not-found.component';
import {AuthenticationGuard} from './guard/authentication-guard';
import {AuthorizationGuard} from './guard/authorization-guard';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ShopComponent,
    ProductComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    CommonModule, ReactiveFormsModule, FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [UserServices,fakeBackendProvider,AuthenticationGuard,
    AuthenticationService,AuthorizationGuard],
  bootstrap: [AppComponent],
  exports : [MatButtonModule]

})
export class AppModule { }
// tslint:disable-next-line:typedef
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
