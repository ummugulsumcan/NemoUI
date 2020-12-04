import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaymentComponent} from './pages/payment.component';
import {PaymentRoutingModule} from './payment-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    TranslateModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ]
})
export class PaymentModule {
}
