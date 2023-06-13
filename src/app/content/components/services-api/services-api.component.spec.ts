import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesApiComponent } from './services-api.component';

describe('ServicesApiComponent', () => {
  let component: ServicesApiComponent;
  let fixture: ComponentFixture<ServicesApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesApiComponent]
    });
    fixture = TestBed.createComponent(ServicesApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
