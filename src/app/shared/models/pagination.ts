export class PageableSort {
  direction: string;
  property: string;

  public constructor(data: any = {}) {
    this.property = data.property || '';
    this.direction = data.direction || '';
  }
}

export class Page<T> {
  content?: Array<T>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number: number;
  size: number;
  totalPages?: number;
  totalElements: number;
  numberOfElements: number;
  sort?: Array<PageableSort>;
}


export class Pageable {
  pageNumber: number;
  pageSize: number;
  sort?: PageableSort;
  searchTerm: string;

  public constructor(data: any = {}) {
    this.pageNumber = data.pageNumber || 1; // sayfadaki ürün sayısı
    this.pageSize = data.pageSize || 3 ;
    this.sort = data.sort || null;
    this.searchTerm = data.searchTerm || '';
  }
}
