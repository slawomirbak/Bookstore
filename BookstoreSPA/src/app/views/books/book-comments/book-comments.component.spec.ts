import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BookCommentsComponent } from './book-comments.component';

describe('BookCommentsComponent', () => {
  let component: BookCommentsComponent;
  let fixture: ComponentFixture<BookCommentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
