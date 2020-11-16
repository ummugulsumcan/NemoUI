import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShippingComponent} from './pages/shipping.component';
import {ShippingRoutingModule} from './shipping-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import {CatalogModule} from '../catalog/catalog.module';
import {CustomerService} from '../../shared/services/customer.service';

@NgModule({
    imports: [
        ShippingRoutingModule,
        CommonModule,
        TranslateModule,
        CatalogModule
    ],
  declarations: [
    ShippingComponent
  ],
  providers: [
    CustomerService
  ]
})
export class ShippingModule {
}
