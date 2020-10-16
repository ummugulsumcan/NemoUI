import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './modules/login/login.component';
import {HomeComponent} from './modules/home/home.component';
import {ShopComponent} from './modules/shop/shop.component';
import {ProductComponent} from './modules/product/product.component';
import {AuthenticationGuardService} from './shared/services/authentication-guard.service';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'shop', component: ShopComponent,canActivate: [AuthenticationGuardService]},
  {path:'product', component: ProductComponent,canActivate: [AuthenticationGuardService]},
  {path: 'home', component: HomeComponent},
  {path:"**",component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
