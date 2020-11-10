import {Component, Input, OnInit} from '@angular/core';
import {ProductResponse} from '../../../shared/models/product';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() productsList : ProductResponse[]=[];

  constructor() { }

  ngOnInit(): void {

  }


}
