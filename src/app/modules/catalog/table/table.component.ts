import {Component, Input, OnInit} from '@angular/core';
import {ProductResponse} from '../../../shared/models/product';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() {
  }

  @Input() productsList : ProductResponse[]=[];

  ngOnInit(): void {

  }


}
