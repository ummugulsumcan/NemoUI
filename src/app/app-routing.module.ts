import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './modules/login/login.component';
import {HomeComponent} from './modules/home/home.component';
import {ShopComponent} from './modules/shop/shop.component';
import {ProductComponent} from './modules/product/product.component';
import {NotFoundComponent} from './shared/module/layout/pages/not-found/not-found.component';
import {AuthenticationGuard} from './guard/authentication-guard';
import {AuthorizationGuard} from './guard/authorization-guard';

const routes: Routes = [
  { path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'shop', component: ShopComponent,canActivate: [AuthorizationGuard,AuthenticationGuard]},
  {path:'product', component: ProductComponent,canActivate: [AuthorizationGuard,AuthenticationGuard]},
  {path: 'home', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
