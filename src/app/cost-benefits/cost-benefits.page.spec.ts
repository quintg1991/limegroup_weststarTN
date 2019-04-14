import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostBenefitsPage } from './cost-benefits.page';

describe('CostBenefitsPage', () => {
  let component: CostBenefitsPage;
  let fixture: ComponentFixture<CostBenefitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostBenefitsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostBenefitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
