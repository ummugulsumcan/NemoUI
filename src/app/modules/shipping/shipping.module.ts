import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShippingComponent} from './pages/shipping.component';
import {ShippingRoutingModule} from './shipping-routing.module';

@NgModule({
  imports: [
    ShippingRoutingModule ,
    CommonModule,
  ],
  declarations: [
    ShippingComponent
  ],
})
export class ShippingModule { }
