import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilterDef} from '../../../shared/models/filter-def';
import {FilterType} from '../../../shared/models/enums/filter-type';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() filterDefs: FilterDef[];
  @Output() rowFiltered = new EventEmitter<FilterDef[]>();
  enumValue = FilterType;

  constructor() {

  }

  ngOnInit(): void {

  }

  filterById(): any {
    this.rowFiltered.emit(this.filterDefs);
  }

}
