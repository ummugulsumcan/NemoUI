import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../shared/services/customer.service';
import {CustomerResponse} from '../../../shared/models/customers';
import {ColumnDef} from '../../../shared/models/column-def';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'shop',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  customerList: CustomerResponse[];
  customerColumnDefs: ColumnDef[];
  color = ['red', 'green', 'blue'];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    const nameColumnClass = (columnName: string, row: any) => {
      if (row[columnName] === 'Selin') {
        return this.color[0];
      } else if (row[columnName] === 'Merve') {
        return this.color[1];
      }
    };
    const colId = new ColumnDef({name: 'id', displayName: 'COLUMN.CUSTOMER_ID'});
    const colName = new ColumnDef({name: 'name', displayName: 'COLUMN.CUSTOMER_NAME', classFn: nameColumnClass});
    const colSurName = new ColumnDef({name: 'surName', displayName: 'COLUMN.CUSTOMER_SURNAME'});
    const colAddress = new ColumnDef({name: 'address', displayName: 'COLUMN.CUSTOMER_ADDRESS'});
    const colCategory = new ColumnDef({name: 'countryName', displayName: 'COLUMN.CUSTOMER_COUNTRY_NAME'});
    this.customerColumnDefs = [colId, colName, colSurName, colAddress, colCategory];
    this.customers();
  }

  customers(): void {
    console.log(JSON.stringify(this.customerService.getCustomers()));
    this.customerService.getCustomers().subscribe(value => this.customerList = value);
  }


}
