import {FilterType} from './enums/filter-type';

export class FilterDef {
  label: string;
  property: any;
  type: FilterType;
  selectionList: [] = [];
  //
  value1: any;
  value2: any;
  valueList: [] = [];


  public constructor(data: any = {}) {
    this.label = data.label || '';
    this.property = data.property;
    this.type = data.type;
    this.valueList = data.valueList;
    this.selectionList = data.selectionList;
    this.value1 = data.value1;
    this.value2 = data.value2;

  }
}
