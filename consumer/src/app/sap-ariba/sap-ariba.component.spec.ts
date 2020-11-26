import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapAribaComponent } from './sap-ariba.component';

describe('SapAribaComponent', () => {
  let component: SapAribaComponent;
  let fixture: ComponentFixture<SapAribaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SapAribaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SapAribaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
