export class ColumnDef {
  name: string;
  displayName: string;
  checkbox: boolean;
  classFn: (columnName: string, row: any) => string;
  class: string;

  public constructor(data: any = {}) {
    this.name = data.name || '';
    this.displayName = data.displayName || '';
    if (data.classFn) {
      this.classFn = data.classFn;
    } else {
      this.classFn = (columnName: string, row: any) => '';
    }
    this.checkbox = data.checkbox || false;
  }

  public formatCellValue(rowObj: any, path: any): any {
    return this.getProperty(rowObj, path);
  }

  public getProperty(rowObj: any, path: any): any {
    return path.split('.').reduce((o, p) => o && o[p], rowObj);
  }

  public formatCellStyle(rowObj: any, path: any): any {
    return this.class;
  }


}
