import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColumnDef} from '../../../shared/models/column-def';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() columnDefs: ColumnDef[];
  @Input() dataList: [];
  @Output() rowSelected = new EventEmitter<any>();

  constructor(public translate: TranslateService) {
  }

  ngOnInit(): void {
  }

  clickRow(value: any): void {
    this.rowSelected.emit(value);
  }




}
