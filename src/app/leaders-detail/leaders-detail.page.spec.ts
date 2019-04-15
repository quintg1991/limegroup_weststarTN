import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadersDetailPage } from './leaders-detail.page';

describe('LeadersDetailPage', () => {
  let component: LeadersDetailPage;
  let fixture: ComponentFixture<LeadersDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadersDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadersDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
