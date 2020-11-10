import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CatalogComponent} from './pages/catalog.component';
import {CardComponent} from './card/card.component';
import {TableComponent} from './table/table.component';

const routes: Routes = [
  {path: '', component: CatalogComponent},
  {path: 'card', component: CardComponent},
  {path: 'table', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule {
}
