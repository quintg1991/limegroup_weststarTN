import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadersPage } from './leaders.page';

describe('LeadersPage', () => {
  let component: LeadersPage;
  let fixture: ComponentFixture<LeadersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
