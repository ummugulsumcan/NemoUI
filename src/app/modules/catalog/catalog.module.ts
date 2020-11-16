import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatalogComponent} from './pages/catalog.component';
import {CatalogRoutingModule} from './catalog-routing.module';
import {ProductService} from '../../shared/services/product-service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TableComponent} from './table/table.component';
import {CardComponent} from './card/card.component';
import {UiSwitchModule} from 'ngx-toggle-switch';
import {ToggleButtonComponent} from './pages/toggle-button-component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [CatalogComponent, TableComponent, CardComponent, ToggleButtonComponent],

  imports: [
    CommonModule,
    CatalogRoutingModule,
    NgbModule,
    UiSwitchModule,
    TranslateModule,
  ],
  exports: [CatalogComponent, TableComponent, CardComponent, ToggleButtonComponent],

  providers: [ProductService]
})
export class CatalogModule {
}
