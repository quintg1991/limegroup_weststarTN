import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrusteesPage } from './trustees.page';

describe('TrusteesPage', () => {
  let component: TrusteesPage;
  let fixture: ComponentFixture<TrusteesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrusteesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrusteesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
