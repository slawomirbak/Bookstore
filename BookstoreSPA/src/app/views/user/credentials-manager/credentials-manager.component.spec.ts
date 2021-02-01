import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CredentialsManagerComponent } from './credentials-manager.component';

describe('CredentialsManagerComponent', () => {
  let component: CredentialsManagerComponent;
  let fixture: ComponentFixture<CredentialsManagerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CredentialsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
