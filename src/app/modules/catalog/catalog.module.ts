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
import { FilterComponent } from './filter/filter.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginationComponent } from './pagination/pagination.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchtextComponent } from './searchtext/searchtext.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [CatalogComponent, TableComponent, CardComponent, ToggleButtonComponent, FilterComponent, PaginationComponent, SearchtextComponent],

  imports: [
    CommonModule,
    CatalogRoutingModule,
    NgbModule,
    UiSwitchModule,
    TranslateModule,
    MatPaginatorModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  exports: [CatalogComponent, TableComponent, CardComponent, ToggleButtonComponent ],

  providers: [ProductService],
  bootstrap: []
})
export class CatalogModule {
}
