import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductResponse} from '../../../shared/models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() productsList: ProductResponse[] = [];
  @Output() selectedProduct = new EventEmitter<ProductResponse>();

  constructor() {
  }

  ngOnInit(): void {

  }

  clickRow(product: ProductResponse): void {
    this.selectedProduct.emit(product);
  }
}
