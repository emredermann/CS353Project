import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryGuyLayoutComponent } from './delivery-guy-layout.component';

describe('DeliveryGuyLayoutComponent', () => {
  let component: DeliveryGuyLayoutComponent;
  let fixture: ComponentFixture<DeliveryGuyLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryGuyLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryGuyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});