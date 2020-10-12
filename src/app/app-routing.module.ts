import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './modules/login/login.component';
import {HomeComponent} from './modules/home/home.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:"**",component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
