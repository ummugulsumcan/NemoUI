import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounce, switchMap, tap} from 'rxjs/operators';
import {interval} from 'rxjs';


@Component({
  selector: 'app-searchtext',
  templateUrl: './searchtext.component.html',
  styleUrls: ['./searchtext.component.css']
})
export class SearchtextComponent implements OnInit {

  searchWord = new FormControl();
  isLoading = false;
  @Output() searchText = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): any {
    this.searchWord.valueChanges.pipe(
      tap(() => this.isLoading = true),
      debounce(() => interval(1000)),
      switchMap(value => this.search(value))
    );
  }

  search(keyword: string): any {
    console.log(keyword);
    this.searchText.emit(keyword);
  }

}
