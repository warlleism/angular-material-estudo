import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamgeNumberComponent } from './chamge-number.component';

describe('ChamgeNumberComponent', () => {
  let component: ChamgeNumberComponent;
  let fixture: ComponentFixture<ChamgeNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChamgeNumberComponent]
    });
    fixture = TestBed.createComponent(ChamgeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
