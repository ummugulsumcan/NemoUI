import {Component, OnInit} from '@angular/core';
import {ProductResponse} from '../../../shared/models/product';
import {ProductService} from '../../../shared/services/product-service';
import {ColumnDef} from '../../../shared/models/column-def';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  checked: boolean;
  productList: ProductResponse[];
  tableColumnDefs: ColumnDef[];
  cartColumnDefs: ColumnDef[];
  color = ['red', 'green', 'blue'];
  currentDate = new Date();
  cValue = formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    const priceColumnClass = (columnName: string, row: any) => {
      if (row[columnName] === 4000) {
        return this.color[0];
      } else if (row[columnName] > 4000) {
        return this.color[1];
      } else {
        return this.color[2];
      }
    };
    const nameColumnClass = (columnName: string, row: any) => {
      if (row[columnName] === 'Samsung S5') {
        return this.color[0];
      } else if (row[columnName] === 'Samsung S6') {
        return this.color[1];
      }
    };

    const colId = new ColumnDef({name: 'id', displayName: 'COLUMN.PRODUCT_ID'});
    const colName = new ColumnDef({name: 'name', displayName: 'COLUMN.PRODUCT_NAME', classFn: nameColumnClass});
    const colPrice = new ColumnDef({name: 'price', displayName: 'COLUMN.PRODUCT_PRICE', classFn: priceColumnClass});
    const colImageUrl = new ColumnDef({name: 'imageUrl', displayName: 'COLUMN.PRODUCT_IMAGE_URL'});
    const colDescription = new ColumnDef({name: 'description', displayName: 'COLUMN.PRODUCT_DESCRIPTION'});
    const colCategory = new ColumnDef({name: 'category', displayName: 'COLUMN.PRODUCT_CATEGORY'});
    const colCreateDate = new ColumnDef({name: 'createDate', displayName: 'COLUMN.PRODUCT_CREATE_DATE'});

    colCreateDate.formatCellValue = (rowObj: any, path: any) => {
      colCreateDate.getProperty(rowObj, path);
      return this.cValue;
    };


    this.tableColumnDefs = [colId, colName, colPrice, colImageUrl, colDescription, colCategory, colCreateDate];
    this.cartColumnDefs = [colId, colName, colPrice, colImageUrl, colDescription, colCategory, colCreateDate];

    this.products();
  }

  products(): void {
    console.log(JSON.stringify(this.productService.getProduct()));
    this.productService.getProduct().subscribe(value => this.productList = value);
  }

  rowData(productResponse: ProductResponse): void {
    console.log('catalog dan gelen product :' + JSON.stringify(productResponse));
    console.log('tıklandı');
  }


}
