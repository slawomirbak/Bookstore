import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketManagerComponent } from './basket-manager.component';

describe('BasketManagerComponent', () => {
  let component: BasketManagerComponent;
  let fixture: ComponentFixture<BasketManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
