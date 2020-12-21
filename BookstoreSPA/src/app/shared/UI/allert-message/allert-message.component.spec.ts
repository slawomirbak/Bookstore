import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllertMessageComponent } from './allert-message.component';

describe('AllertMessageComponent', () => {
  let component: AllertMessageComponent;
  let fixture: ComponentFixture<AllertMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllertMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllertMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
