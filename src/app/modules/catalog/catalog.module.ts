import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatalogComponent} from './pages/catalog.component';
import {CatalogRoutingModule} from './catalog-routing.module';


@NgModule({
  declarations: [CatalogComponent],

  imports: [
    CommonModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
