import {Component, OnInit} from '@angular/core';
import { ProductResponse} from '../../../shared/models/product';
import {ProductService} from '../../../shared/services/product-service';


@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private productService: ProductService) {
  }

  checked: boolean;

  productList: ProductResponse[];


  ngOnInit(): void {

    this.products();
  }

   products(): void {

    console.log(JSON.stringify(this.productService.getProduct()));

    this.productService.getProduct().subscribe(value => this.productList = value);

  }

  get productsList(): ProductResponse[] {

  return  this.productList;

  }
}
