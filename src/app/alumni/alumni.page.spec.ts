import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniPage } from './alumni.page';

describe('AlumniPage', () => {
  let component: AlumniPage;
  let fixture: ComponentFixture<AlumniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
