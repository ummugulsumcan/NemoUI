import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() pageNumbers;
  @Output() pageSelected = new EventEmitter<any>();
  @Output() pageSizeSelected = new EventEmitter<any>();
  pageSizes = [2, 3, 4];

  constructor() {

  }

  ngOnInit(): void {
  }

  selectedPageNumbers(pages: any): any {
    this.pageSelected.emit(pages);
  }

  handlePageSizeChange($event: Event): any {
    this.pageSizeSelected.emit($event);
  }
}
