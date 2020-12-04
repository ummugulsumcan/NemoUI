import {Component, OnInit} from '@angular/core';
import {ProductResponse} from '../../../shared/models/product';
import {ProductService} from '../../../shared/services/product-service';
import {ColumnDef} from '../../../shared/models/column-def';
import {formatDate} from '@angular/common';
import {FilterDef} from '../../../shared/models/filter-def';
import {FilterType} from '../../../shared/models/enums/filter-type';
import {Pageable} from '../../../shared/models/pagination';
import {CustomPaginationService} from '../../../shared/services/custom-pagination.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchService} from '../../../shared/services/search.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  checked: boolean;
  productList: ProductResponse[] = [];
  productListFilter: ProductResponse[] = [];
  productListFiltered: ProductResponse[] = [];
  productListFilteredCategory: ProductResponse[] = [];
  tableColumnDefs: ColumnDef[];
  cartColumnDefs: ColumnDef[];
  filterTable: FilterDef[];
  color = ['red', 'green', 'blue'];
  selectedList = ['Telefon', 'Bilgisayar', 'Tablet'];
  dates: Date[] = [];
  currentDate1 = new Date(2018, 7, 22);
  cValue = formatDate(this.currentDate1, 'yyyy-MM-dd', 'en-US');
  fromDate: Date;
  toDate: Date;

  pageNumbers: any;
  totalItem: number;
  pageable = new Pageable();
  pageNumber = 1;
  pageSize = 3;
  text = 'Samsung S6';

  constructor(private productService: ProductService,
              private customService: CustomPaginationService,
              private searchService: SearchService,
              private route: ActivatedRoute,
              private router: Router) {

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
    const textId = new FilterDef({label: colId.name, type: FilterType.TEXT});
    const textName = new FilterDef({label: colName.name, type: FilterType.TEXT});
    const textPrice = new FilterDef({label: colPrice.name, type: FilterType.TEXT});
    const textDescription = new FilterDef({label: colDescription.name, type: FilterType.TEXT});
    const selectCatalogMulti = new FilterDef({
      label: colCategory.name,
      selectionList: this.selectedList,
      valueList: [],
      type: FilterType.MULTI_SELECT
    });
    const selectCatalogSingle = new FilterDef({
      label: colCategory.name,
      selectionList: this.selectedList,
      type: FilterType.SINGLE_SELECT
    });
    const selectDate = new FilterDef({
      label: colCreateDate.name,
      type: FilterType.DATE,
      value1: this.fromDate,
      value2: this.toDate
    });

    this.tableColumnDefs = [colId, colName, colPrice, colImageUrl, colDescription, colCategory, colCreateDate];
    this.cartColumnDefs = [colId, colName, colPrice, colImageUrl, colDescription, colCategory, colCreateDate];
    this.filterTable = [textId, textName, textPrice, textDescription, selectCatalogSingle, selectCatalogMulti, selectDate];
    this.products();
    this.retrieveProductsList();
    this.productsName(this.text);
  }

  products(): void {
    console.log(JSON.stringify(this.productService.getProduct()));
    this.productService.getProduct().subscribe(value => this.productList = value);
    this.productService.getProduct().subscribe(value => this.productListFilter = value);
    this.productService.getProduct().subscribe(value => this.productListFiltered = value);
    this.productService.getProduct().subscribe(value => this.productListFilteredCategory = value);

  }

  productsName(text: string): any {
    this.text = text;
    this.searchService.productSearch(this.text);
  }

  rowData(productResponse: ProductResponse): void {
    console.log('catalog dan gelen product :' + JSON.stringify(productResponse));
    console.log('tıklandı');
  }

  listFilter(filterDefs: FilterDef[]): any {
    filterDefs.forEach(filter => {
      this.productListFilter = this.productListFiltered;
      if (filter.label === 'id') {
        this.productList = this.productListFilter.filter(value => value.id === filter.value1);
      } else if (filter.label === 'name') {
        this.productListFilter = this.productList.filter(value => value.name === filter.value1);
      } else if (filter.label === 'price') {
        this.productList = this.productListFilter.filter(value => value.price === filter.value1);
      } else if (filter.label === 'description') {
        this.productListFilter = this.productListFilter.filter(value => value.description === filter.value1);
      } else if (filter.type === 'SINGLE_SELECT') {
        this.productListFilter = this.productList.filter(value => value.category === filter.value1);
        console.log('Single-selected value:' + filter.value1);
      } else if (filter.type === 'MULTI_SELECT') {
        this.productList = this.productListFilter.filter(value =>
          // tslint:disable-next-line:only-arrow-functions
          filter.valueList.find(function(el): boolean {
            return el === value.category;
          }));
        console.log('Multi-selected value:' + JSON.stringify(filter.valueList));
      } else if (filter.label === 'createDate') {
        alert('StartDate' + JSON.stringify(filter.value1) + 'EndDate' + JSON.stringify(filter.value2));
      }

    });
  }


  retrieveProductsList(): any {
    this.customService.getProductPaged(this.pageNumber, this.pageSize)
      .subscribe(
        response => {
          this.router.navigate(['/catalog'], {queryParams: {pageNumber: this.pageNumber, pageSize: this.pageSize}});
          this.productList = response.productList;
          this.totalItem = response.totalItem;
          this.pageable.pageNumber = response.page;
          this.pageable.pageSize = response.pageSize;
          this.pageNumbers = response.pageNumbers;
          console.log('page values:' + JSON.stringify(response.page));
          console.log('pageSize values:' + JSON.stringify(response.pageSize));
          console.log('totalItem values:' + JSON.stringify(response.totalItem));
          console.log('productList values:' + JSON.stringify(response.page));
          console.log('productList pageNumbers:' + JSON.stringify(response.pageNumbers));
        },
        error => {
          console.log(error);
        });
  }

  updatePageNumber(pageNumber: number): void {
    this.pageNumber = pageNumber;
    this.retrieveProductsList();
  }

  updatePageSize(pageSize: number): void {
    this.pageSize = pageSize;
    this.retrieveProductsList();
  }
}
