import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtextComponent } from './searchtext.component';

describe('SearchtextComponent', () => {
  let component: SearchtextComponent;
  let fixture: ComponentFixture<SearchtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchtextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
