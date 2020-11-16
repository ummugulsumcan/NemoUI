import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './modules/login/login.component';
import {HomeComponent} from './modules/home/home.component';
import {NotFoundComponent} from './shared/module/layout/pages/not-found/not-found.component';
import {AuthenticationGuard} from './guard/authentication-guard';
import {NgxPermissionsGuard} from 'ngx-permissions';
import {UnAuthComponent} from './modules/unAuth/unauth.component';


const routes: Routes = [

  {path: '', component: HomeComponent},

  {path: 'login', component: LoginComponent},

  {path: 'unAuth', component: UnAuthComponent},

  {
    path: 'shipping',
    loadChildren: () => import('./modules/shipping/shipping.module').then(m => m.ShippingModule),
    canActivate: [AuthenticationGuard, NgxPermissionsGuard],
    data: {
      permissions: {
        only: ['ADMIN'],
        redirectTo: 'unAuth'
      }
    }
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: 'catalog',
    loadChildren: () => import('./modules/catalog/catalog.module').then(m => m.CatalogModule),
    canActivate: [AuthenticationGuard, NgxPermissionsGuard],
    data: {
      permissions: {}
    }

  },

  {
    path: 'payment',
    loadChildren: () => import('./modules/payment/payment.module').then(m => m.PaymentModule),
    canActivate: [AuthenticationGuard, NgxPermissionsGuard],
    data: {
      permissions: {}
    }
  },

  {path: 'home', component: HomeComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

