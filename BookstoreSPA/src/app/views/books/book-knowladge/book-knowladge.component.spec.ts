import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookKnowladgeComponent } from './book-knowladge.component';

describe('BookKnowladgeComponent', () => {
  let component: BookKnowladgeComponent;
  let fixture: ComponentFixture<BookKnowladgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookKnowladgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookKnowladgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
